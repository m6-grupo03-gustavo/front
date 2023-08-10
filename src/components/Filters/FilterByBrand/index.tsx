import { useAuth } from "../../../hooks/useAuth"
import { StyleFilterByBrand } from "./style"






export const FilterByBrand = () =>{
    const { cars,  setCars } = useAuth()

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
                <li onClick={() => setCars(all)}>All</li>
                <li onClick={() =>  setCars(carsFiat)}>Fiat</li>
                <li onClick={() =>  setCars(carsFord)}>Ford</li>
                <li onClick={() =>  setCars(carsHonda)}>Honda</li>
                <li onClick={() =>  setCars(carsPorsche)}>Porsche</li>
                <li onClick={() =>  setCars(carsVolswagen)}>Volswagen</li>
            </ul>
        </StyleFilterByBrand>
    )
}