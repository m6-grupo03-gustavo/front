import { useAuth } from "../../../hooks/useAuth"
import { StyleFilterByFuel } from "./style"






export const FilterByFuel = () =>{
    const { cars, setCarsFilter } = useAuth()

    const allFuelsOfVehicles: string[] = []

    
    cars.map((car) => {
        if (!allFuelsOfVehicles.includes(car.fuel.toLowerCase())) {
            allFuelsOfVehicles.push(car.fuel.toLowerCase());
        }
    })
    return(
        <StyleFilterByFuel>
            <h4>Combustível</h4>
            <ul>
                {allFuelsOfVehicles.map((fuel) =>(
                    <li onClick={() =>  setCarsFilter(cars.filter(car => car.fuel.toLowerCase() == fuel))}>
                        {fuel}
                    </li>    
                ))}
            </ul>
        </StyleFilterByFuel>
    )
}