import { useState } from "react"
import { ICar } from "../../../providers/AuthProvider"
import { ModalRemoveAd } from "../../Modals/ModalRemoveAd"
import { UserInitials } from "../../UserInitials"
import { useNavigate } from "react-router-dom"
import { 
    StyleCardCar,
     StyleContainerImage, 
     StyleContainerCarInfo, 
     StyleContainerUserIfo,
     StyleContainerDetailCar 
} from "./style"

import { AiFillDelete } from 'react-icons/ai'
import { BiSolidEditAlt } from 'react-icons/bi'
import { useAuth } from "../../../hooks/useAuth"
import { ModalUpdateCar } from "../../Modals/ModalUpdateCar"

interface ICarCardProps {
    car: ICar
    renderOnAnotherPage?: string
}


export default function CardCar({car, renderOnAnotherPage}: ICarCardProps){
    const [modalRemoveAdOpen, setModalRemoveAdOpen] = useState(false);
    const [modalUpdateCar, setModalUpdateCar] = useState(false);
    const {setCar} = useAuth()
    const navigate = useNavigate()

    const navigateCar = () => {
        if (car !== null) {
            setCar(car)
            navigate("/product")
        }
    }
    const setModalAndCar = () =>{
        setCar(car)
        setModalUpdateCar(true)
    }

    if(renderOnAnotherPage == 'dashboard'){
        return (
            <StyleCardCar>
                <StyleContainerImage>
                    <img src={car.carImages[0].url} alt={car.model}/>
                </StyleContainerImage>

                <StyleContainerCarInfo>
                    <h3>{car.model}</h3>
                    <p>{car.description}</p>
                </StyleContainerCarInfo>

                <StyleContainerDetailCar>
                    <div>
                        <span>{car.km}KM</span>
                        <span>{car.year}</span>
                    </div>
                    <p>{`RS ${car.value},00`}</p>
                </StyleContainerDetailCar>
                <div className="containerTools">
                    <div onClick={() => setModalRemoveAdOpen(true)}>
                        <AiFillDelete  size={25} style={{
                                        color:  "#cd2b31",
                                        margin: "0",
                                        cursor: 'pointer'
                        }}/>
                    </div>
                    
                    <div onClick={() => setModalAndCar()}>
                        <BiSolidEditAlt  size={25} style={{
                                        color:  "#a1a31a",
                                        margin: "0",
                                        cursor: 'pointer'
                        }}/>
                    </div>

                </div>
                {modalRemoveAdOpen && <ModalRemoveAd 
                        id={car.id} 
                        modalRemoveAdOpen={modalRemoveAdOpen} 
                        setModalRemoveAdOpen={setModalRemoveAdOpen}
                />}
                {modalUpdateCar && <ModalUpdateCar
                        id={car.id} 
                        modalUpdateCar={modalUpdateCar} 
                        setModalUpdateCar={setModalUpdateCar}
                />}
        </StyleCardCar>
        
        
        )
    }else{
        
            return(
                <StyleCardCar onClick={() => navigateCar()}>
                    <StyleContainerImage>
                        <img src={car.carImages[0].url} alt={car.model}/>
                    </StyleContainerImage>
        
                    <StyleContainerCarInfo>
                        <h3>{car.model}</h3>
                        <p>{car.description}</p>
                    </StyleContainerCarInfo>
        
                    <StyleContainerUserIfo>
                        <UserInitials userId={car.id} userName={car.model}/>
                        <h6>{car.model}</h6>
                    </StyleContainerUserIfo>
        
                    <StyleContainerDetailCar>
                        <div>
                            <span>{car.km}KM</span>
                            <span>{car.year}</span>
                        </div>
                        <p>{`RS ${car.value},00`}</p>
                    </StyleContainerDetailCar>
                </StyleCardCar>
            ) 

    }
        
}