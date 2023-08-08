// import { ICar } from ".."
import { 
    StyleCardCar,
     StyleContainerImage, 
     StyleContainerCarInfo, 
     StyleContainerUserIfo,
     StyleContainerDetailCar 
} from "./style"


// interface ICarCardProps {
//     car: ICar
//   }


export default function CardCar(){


    return(
        <StyleCardCar>
            <StyleContainerImage>
                <p>Imagem</p>
            </StyleContainerImage>

            <StyleContainerCarInfo>
                <h3>Maserati - Ghibli</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit illo vitae omnis suscipit quidem. Quas aliquam saepe nemo tenetur. Culpa voluptatem impedit cum officia? Corrupti quos iste possimus commodi omnis!</p>
            </StyleContainerCarInfo>

            <StyleContainerUserIfo>
                <span>nu</span>
                <h6>Nome de Usuario</h6>
            </StyleContainerUserIfo>

            <StyleContainerDetailCar>
                <div>
                    <span>0 KM</span>
                    <span>2019</span>
                </div>
                <p>R$ 00.000,00</p>
            </StyleContainerDetailCar>
        </StyleCardCar>
    ) 
        
}