import { useEffect } from "react";
import { api } from "../../service/api";
import { StyleShowcase } from "./style";
import CardCar from "./Card";
import { useAuth } from "../../hooks/useAuth";
import { IResponseGetCars } from "../../providers/AuthProvider";



export default  function ShowcaseCars(){
    const {  setCars, setCarsFilter, carsFilter, page, setResponseGetCars } = useAuth()

    useEffect(() => {
        (async () => {
            const response = await api.get<IResponseGetCars>(`car?page=${page}&perPage=12`)
            
            setResponseGetCars(response.data)
            setCars(response.data.data)
            setCarsFilter(response.data.data)
        })()
    }, [page])

    return(
        <>
                <StyleShowcase>
                    {carsFilter.map((car) =>(
                        <CardCar key={car.id} car={car}/>    
                    ))}
                </StyleShowcase>
        </>
    ) 
        
}