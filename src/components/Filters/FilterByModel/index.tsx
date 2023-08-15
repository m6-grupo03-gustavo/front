import { useAuth } from "../../../hooks/useAuth"
import { StyleFilterByModel } from "./style"


export const FilterByModel = () =>{
    const { cars, setCarsFilter } = useAuth()


    const allModelsOfVehicles: string[] = []


    cars.map((car) => {
        if (!allModelsOfVehicles.includes(car.name.toLowerCase())) {
            allModelsOfVehicles.push(car.name.toLowerCase());
        }
    })

    return(
        <StyleFilterByModel>
            <h4>Modelo</h4>
            <ul>
                {allModelsOfVehicles.map((name) =>(
                    <li onClick={() =>  setCarsFilter(cars.filter(car => car.name.toLowerCase() == name))}>
                        {name}
                    </li>    
                ))}
            </ul>
        </StyleFilterByModel>
    )
}