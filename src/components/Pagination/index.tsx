import { useAuth } from "../../hooks/useAuth"
import { StylePagination } from "./style"





export const Pagination = () =>{
    const {  setPage, page, responseGetCars } = useAuth()
    return(
        <StylePagination>
            {responseGetCars?.prevPage == null ? <span>Back</span> : <button onClick={() => setPage(page- 1)}>Back</button>}
            <p>{page}</p>
            {responseGetCars?.nextPage == null ? <span>Next</span>  : <button onClick={() => setPage(page + 1)}>Next</button>}
            
        </StylePagination>
    )
}