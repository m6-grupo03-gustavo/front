import { useAuth } from "../../../hooks/useAuth"
import { StyleFilterByModel } from "./style"


export const FilterByModel = () =>{
    const { cars, setCarsFilter } = useAuth()

    const all = cars
    const carsCivic = cars.filter(car => car.model.toLowerCase() === 'civic' )
    const carsCorolla = cars.filter(car => car.model.toLowerCase() === 'corolla' )
    const carsCruze = cars.filter(car => car.model.toLowerCase() === 'cruze' )
    const carsFit = cars.filter(car => car.model.toLowerCase() === 'fit' )
    const carsGol = cars.filter(car => car.model.toLowerCase() === 'gol' )
    const carsKa = cars.filter(car => car.model.toLowerCase() === 'ka' )
    const carsOnix = cars.filter(car => car.model.toLowerCase() === 'onix' )
    const carsPorsche718 = cars.filter(car => car.model.toLowerCase() === 'porsche 718' )

    return(
        <StyleFilterByModel>
            <h4>Modelo</h4>
            <ul>
                <li onClick={() => setCarsFilter(all)}>All</li>
                <li onClick={() =>  setCarsFilter(carsCivic)}>Civic</li>
                <li onClick={() =>  setCarsFilter(carsCorolla)}>Corolla</li>
                <li onClick={() =>  setCarsFilter(carsCruze)}>Cruze</li>
                <li onClick={() =>  setCarsFilter(carsFit)}>Fit</li>
                <li onClick={() =>  setCarsFilter(carsGol)}>Gol</li>
                <li onClick={() =>  setCarsFilter(carsKa)}>Ka</li>
                <li onClick={() =>  setCarsFilter(carsOnix)}>Onix</li>
                <li onClick={() =>  setCarsFilter(carsPorsche718)}>porsche 718</li>
            </ul>
        </StyleFilterByModel>
    )
}