
import FomrRegister from "../../components/Form/FormRegister"
import { Header } from "../../components/Header"
import { StyledContainerRegisterPage } from "./style"




export const Register = () =>{
    return(
        <>
        <Header/>
        <StyledContainerRegisterPage >
            <FomrRegister/>
        </StyledContainerRegisterPage>
        </>
    )
}