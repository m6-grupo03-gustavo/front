
import { Footer } from "../../components/Footer"
import FomrRegister from "../../components/form/FormRegister"
import { Header } from "../../components/Header"
import { ModalRegisterSucess } from "../../components/Modals/ModalRegisterSucess"
import { StyledContainerRegisterPage, StyledToastContainer } from "./style"
import 'react-toastify/dist/ReactToastify.css';




export const Register = () =>{
    return(
        <>
        <Header/>
        <StyledContainerRegisterPage >
            <FomrRegister/>
        </StyledContainerRegisterPage>
        <ModalRegisterSucess/>
        <Footer/>

        <StyledToastContainer/>
        </>
    )
}