import { useAuth } from "../../../hooks/useAuth"
import { StyleFilterByBrand } from "./style"






export const FilterByBrand = () =>{
    const { cars, setCarsFilter } = useAuth()

    const allBrandsOfVehicles: string[] = []

    cars.map((car) => {
        if (!allBrandsOfVehicles.includes(car.brand)) {
            allBrandsOfVehicles.push(car.brand);
        }
    })

    return(
        <StyleFilterByBrand>
            <h4>Marca</h4>
            <ul>
                {allBrandsOfVehicles.map((brand) =>(
                    <li onClick={() =>  setCarsFilter(cars.filter(car => car.brand == brand))}>
                        {brand}
                    </li>    
                ))}
            </ul>
        </StyleFilterByBrand>
    )
}