import { useEffect } from "react";
import { api } from "../../service/api";
import { StyleShowcase } from "./style";
import CardCar from "./Card";
import { useAuth } from "../../hooks/useAuth";
import { ICar } from "../../providers/AuthProvider";




export default  function ShowcaseCars(){
    const { cars, setCars } = useAuth()

    useEffect(() => {
        (async () => {
            const response = await api.get<ICar[]>('cars')

            setCars(response.data)
        })()
    }, [cars])

    return(
        <>
                <StyleShowcase>
                    {/* {cars.map((car) =>(
                        <CardCar key={car.id} car={car}/>    
                    ))} */}
                    <CardCar/>
                    <CardCar/>
                    <CardCar/>
                    <CardCar/>
                    <CardCar/>
                    <CardCar/>
                    <CardCar/>
                    <CardCar/>
                    <CardCar/>
                </StyleShowcase>
        </>
    ) 
        
}