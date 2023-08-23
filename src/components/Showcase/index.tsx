import { useEffect } from "react";
import { api } from "../../service/api";
import { StyleShowcase } from "./style";
import CardCar from "./Card";
import { useAuth } from "../../hooks/useAuth";
import { ICar, IResponseGetCars } from "../../providers/AuthProvider";

interface IShowcaseCarsProps{
    renderOnAnotherPage?: string
    listCar?: ICar[]
}

export default  function ShowcaseCars({renderOnAnotherPage, listCar} :IShowcaseCarsProps){
    const { setCars, setCarsFilter, carsFilter, page, setResponseGetCars } = useAuth()

    useEffect(() => {
        (async () => {
            const response = await api.get<IResponseGetCars>(`car?page=${page}&perPage=12`)
            
            setResponseGetCars(response.data)
            setCars(response.data.data)
            setCarsFilter(response.data.data)
        })()
    }, [page])
    
    if(renderOnAnotherPage == 'dashboard'){
        return(
            <>
                    <StyleShowcase>
                        {listCar?.map((car) =>(
                            <CardCar renderOnAnotherPage={renderOnAnotherPage} key={car.id} car={car}/>    
                        ))}
                    </StyleShowcase>
            </>
        ) 
    }else{

        return(
            <>
                    <StyleShowcase>
                        {carsFilter.map((car) =>(
                            <CardCar   key={car.id} car={car}/>    
                        ))}
                    </StyleShowcase>
            </>
        ) 
    }
        
}