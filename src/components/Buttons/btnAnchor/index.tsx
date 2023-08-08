import { Link } from "react-router-dom"
import { StyleContainerAnchor } from "./style"

interface iBtnAnchor{
    text: string
    url: string 
    typeStyle: 'brand1' | 'brand3' | 'white' | 'delete' | 'grey' | 'black'
}



export const BtnAnchor = ({text, url, typeStyle}: iBtnAnchor) =>{
    return(
        <StyleContainerAnchor typeStyle={typeStyle}>
            <Link to={url}>
                {text}
            </Link>
        </StyleContainerAnchor>
    )
}