import { useAuth } from "../../../hooks/useAuth"
import { StyleFilterByColor } from "./style"






export const FilterByColor = () =>{
    const { cars, setCarsFilter } = useAuth()

    const allColorOfVehicles: string[] = []

    cars.map((car) => {
        if (!allColorOfVehicles.includes(car.color.toLowerCase())) {
            allColorOfVehicles.push(car.color.toLowerCase());
        }
    })


    return(
        <StyleFilterByColor>
            <h4>Cor</h4>
            <ul>
                {allColorOfVehicles.map((color) =>(
                    <li onClick={() =>  setCarsFilter(cars.filter(car => car.color.toLowerCase() == color))}>
                        {color}
                    </li>    
                ))}
            </ul>
        </StyleFilterByColor>
    )
}