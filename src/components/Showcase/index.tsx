import { useEffect } from "react";
import { api } from "../../service/api";
import { StyleShowcase } from "./style";
import CardCar from "./Card";
import { useAuth } from "../../hooks/useAuth";
import { ICar } from "../../providers/AuthProvider";




export default  function ShowcaseCars(){
    const {  setCars, setCarsFilter, carsFilter } = useAuth()

    useEffect(() => {
        (async () => {
            const response = await api.get<ICar[]>('car')
            
            setCars(response.data)
            setCarsFilter(response.data)
        })()
    }, [])

    return(
        <>
                <StyleShowcase>
                    {carsFilter.map((car) =>(
                        <CardCar key={car.id} car={car}/>    
                    ))}
                </StyleShowcase>
        </>
    ) 
        
}