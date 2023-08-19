import { useAuth } from "../../../hooks/useAuth"
import { StyleFilterByModel } from "./style"


export const FilterByModel = () =>{
    const { cars, setCarsFilter } = useAuth()


    const allModelsOfVehicles: string[] = []


    cars.map((car) => {
        if (!allModelsOfVehicles.includes(car.model.toLowerCase())) {
            allModelsOfVehicles.push(car.model.toLowerCase());
        }
    })

    return(
        <StyleFilterByModel>
            <h4>Modelo</h4>
            <ul>
                {allModelsOfVehicles.map((model) =>(
                    <li onClick={() =>  setCarsFilter(cars.filter(car => car.model.toLowerCase() == model))}>
                        {model}
                    </li>    
                ))}
            </ul>
        </StyleFilterByModel>
    )
}