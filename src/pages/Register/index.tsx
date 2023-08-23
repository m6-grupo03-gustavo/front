
import { Footer } from "../../components/Footer"
import FomrRegister from "../../components/Form/FormRegister"
import { Header } from "../../components/Header"
import { ModalRegisterSucess } from "../../components/Modals/ModalRegisterSucess"
import { StyledContainerRegisterPage } from "./style"




export const Register = () =>{
    return(
        <>
        <Header/>
        <StyledContainerRegisterPage >
            <FomrRegister/>
        </StyledContainerRegisterPage>
        <ModalRegisterSucess/>
        <Footer/>
        </>
    )
}