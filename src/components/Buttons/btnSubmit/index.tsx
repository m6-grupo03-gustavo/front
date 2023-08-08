
import { StyleContainerSubmit } from "./style"

interface iBtnSubmit{
    text: string
    typeStyle: 'brand1' | 'brand3' | 'white' | 'delete' | 'grey' | 'black'
}


export const BtnSubmit = ({text, typeStyle}: iBtnSubmit) =>{
    return(
        <StyleContainerSubmit type="submit"  typeStyle={typeStyle}>
            {text}           
        </StyleContainerSubmit>
    )
}