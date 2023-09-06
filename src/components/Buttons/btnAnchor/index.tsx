import { Link } from "react-router-dom"
import { StyleContainerAnchor } from "./style"

interface iBtnAnchor{
    text: string
    url: string 
    typeStyle: 'brand1' | 'brand3' | 'white' | 'delete' | 'grey' | 'black'
    onClick?: () => void
}



export const BtnAnchor = ({text, url, typeStyle, onClick}: iBtnAnchor) =>{
    return(
        <StyleContainerAnchor typeStyle={typeStyle} onClick={onClick}>
            <Link to={url}>
                {text}
            </Link>
        </StyleContainerAnchor>
    )
}