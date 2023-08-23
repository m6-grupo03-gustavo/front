import { useState } from "react"
import { ICar } from "../../../providers/AuthProvider"
import { ModalRemoveAd } from "../../Modals/ModalRemoveAd"
import { UserInitials } from "../../UserInitials"
import { 
    StyleCardCar,
     StyleContainerImage, 
     StyleContainerCarInfo, 
     StyleContainerUserIfo,
     StyleContainerDetailCar 
} from "./style"

import { AiFillDelete } from 'react-icons/ai'
interface ICarCardProps {
    car: ICar
    renderOnAnotherPage?: string
  }


export default function CardCar({car, renderOnAnotherPage}: ICarCardProps){
    const [modalRemoveAdOpen, setModalRemoveAdOpen] = useState(false);
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
            <div className="containerTools">
                <div onClick={() => setModalRemoveAdOpen(true)}>
                    <AiFillDelete  size={25} style={{
                                    color:  "#cd2b31",
                                    margin: "0"
                    }}/>
                </div>

            </div>
            {modalRemoveAdOpen && <ModalRemoveAd 
                    id={car.id} 
                    modalRemoveAdOpen={modalRemoveAdOpen} 
                    setModalRemoveAdOpen={setModalRemoveAdOpen}
            />}
        </StyleCardCar>
        
        
        )
    }else{
        
            return(
                <StyleCardCar>
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