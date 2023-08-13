import { useAuth } from "../../../hooks/useAuth"
import { StyleFilterByYear } from "./style"



export const FilterByYear = () =>{
    const { cars, setCarsFilter } = useAuth()

    const allYearsOfVehicles: string[] = []

    cars.map((car) => {
        if (!allYearsOfVehicles.includes(car.year)) {
            allYearsOfVehicles.push(car.year);
        }
    })


    return(
        <StyleFilterByYear>
            <h4>Ano</h4>
            <ul>
                {allYearsOfVehicles.map((year) =>(
                    <li onClick={() =>  setCarsFilter(cars.filter(car => car.year == year))}>
                        {year}
                    </li>    
                ))}

            </ul>

        </StyleFilterByYear>
    )
}