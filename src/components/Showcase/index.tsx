import { useEffect, useState } from "react";
import { api } from "../../service/api";
import { StyleShowcase } from "./style";
import CardCar from "./Card";


export interface ICar {
    id: number,
    name: string,
    brand: string,
    model: string,
    year: string,
    fuel: number,
    value: number,
    description: string
    is_published: boolean
    user_id: number
}

export default  function ShowcaseCars(){
    const [cars, setCars] = useState<ICar[]>([])

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
                        <CardContact key={car.id} car={car}/>    
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