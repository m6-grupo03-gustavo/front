import { StyleAdvertising } from "./style"
interface IAdvertisingProps{
    message: string
}

export const Advertising = ({message}: IAdvertisingProps) =>{
    return(
        <StyleAdvertising>
            <h2>{message}</h2>
        </StyleAdvertising>
    )
}