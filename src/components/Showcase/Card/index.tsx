// import { ICar } from ".."
import { ICar } from "../../../providers/AuthProvider"
import { UserInitials } from "../../UserInitials"
import { 
    StyleCardCar,
     StyleContainerImage, 
     StyleContainerCarInfo, 
     StyleContainerUserIfo,
     StyleContainerDetailCar 
} from "./style"


interface ICarCardProps {
    car: ICar
  }


export default function CardCar({car}: ICarCardProps){


    return(
        <StyleCardCar>
            <StyleContainerImage>
                <img src={car.carImages[0].url} alt={car.name}/>
            </StyleContainerImage>

            <StyleContainerCarInfo>
                <h3>{car.name}</h3>
                <p>{car.description}</p>
            </StyleContainerCarInfo>

            <StyleContainerUserIfo>
                <UserInitials userId={car.id} userName={car.name}/>
                <h6>Nome de Usuario</h6>
            </StyleContainerUserIfo>

            <StyleContainerDetailCar>
                <div>
                    <span>0 KM</span>
                    <span>{car.year}</span>
                </div>
                <p>{`RS ${car.value},00`}</p>
            </StyleContainerDetailCar>
        </StyleCardCar>
    ) 
        
}