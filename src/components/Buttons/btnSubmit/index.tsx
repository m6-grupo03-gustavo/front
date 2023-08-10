
import { StyleContainerSubmit } from "./style"

interface iBtnSubmit{
    text: string
    typeStyle: 'brand1' | 'brand3' | 'white' | 'delete' | 'grey' | 'black'
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; 
}


export const BtnSubmit = ({text, typeStyle, onClick }: iBtnSubmit) =>{
    return(
        <StyleContainerSubmit type="submit"  typeStyle={typeStyle} onClick={onClick}>
            {text}           
        </StyleContainerSubmit>
    )
}