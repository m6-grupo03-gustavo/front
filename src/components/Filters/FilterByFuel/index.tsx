import { useAuth } from "../../../hooks/useAuth"
import { StyleFilterByFuel } from "./style"






export const FilterByFuel = () =>{
    const { cars, setCarsFilter } = useAuth()

    const allFuelsOfVehicles: string[] = []

    
    cars.map((car) => {
        if (!allFuelsOfVehicles.includes(car.fuel)) {
            allFuelsOfVehicles.push(car.fuel);
        }
    })
    console.log(allFuelsOfVehicles)
    return(
        <StyleFilterByFuel>
            <h4>Combustível</h4>
            <ul>
                {allFuelsOfVehicles.map((fuel) =>(
                    <li onClick={() =>  setCarsFilter(cars.filter(car => car.fuel == fuel))}>
                        {fuel}
                    </li>    
                ))}
            </ul>
        </StyleFilterByFuel>
    )
}