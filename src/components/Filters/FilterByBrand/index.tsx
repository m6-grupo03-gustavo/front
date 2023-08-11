import { useAuth } from "../../../hooks/useAuth"
import { StyleFilterByBrand } from "./style"






export const FilterByBrand = () =>{
    const { cars, setCarsFilter } = useAuth()

    const all = cars
    const carsFiat = cars.filter(car => car.brand.toLowerCase() === 'fiat' )
    const carsFord = cars.filter(car => car.brand.toLowerCase() === 'ford' )
    const carsHonda = cars.filter(car => car.brand.toLowerCase() === 'honda' )
    const carsPorsche = cars.filter(car => car.brand.toLowerCase() === 'porsche' )
    const carsVolswagen = cars.filter(car => car.brand.toLowerCase() === 'volswagen' )

    return(
        <StyleFilterByBrand>
            <h4>Marca</h4>
            <ul>
                <li onClick={() => setCarsFilter(all)}>All</li>
                <li onClick={() =>  setCarsFilter(carsFiat)}>Fiat</li>
                <li onClick={() =>  setCarsFilter(carsFord)}>Ford</li>
                <li onClick={() =>  setCarsFilter(carsHonda)}>Honda</li>
                <li onClick={() =>  setCarsFilter(carsPorsche)}>Porsche</li>
                <li onClick={() =>  setCarsFilter(carsVolswagen)}>Volswagen</li>
            </ul>
        </StyleFilterByBrand>
    )
}