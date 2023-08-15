import { useAuth } from "../../../hooks/useAuth"
import { StyleFilterByBrand } from "./style"






export const FilterByBrand = () =>{
    const { cars, setCarsFilter } = useAuth()

    const allBrandsOfVehicles: string[] = []

    cars.map((car) => {
        if (!allBrandsOfVehicles.includes(car.brand.toLowerCase())) {
            allBrandsOfVehicles.push(car.brand.toLowerCase());
        }
    })

    return(
        <StyleFilterByBrand>
            <h4>Marca</h4>
            <ul>
                {allBrandsOfVehicles.map((brand) =>(
                    <li onClick={() =>  setCarsFilter(cars.filter(car => car.brand.toLowerCase() == brand))}>
                        {brand}
                    </li>    
                ))}
            </ul>
        </StyleFilterByBrand>
    )
}