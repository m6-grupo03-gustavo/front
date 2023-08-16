
import { useNavigate } from "react-router-dom"
import { StyleModalError } from "./style"


interface ModalErrorProps {
    toggleModal: () => void
}

export const ModalError = ({ toggleModal }: ModalErrorProps) => {
    const navigate = useNavigate()

    const handleCloseandRedirect = () => {
        toggleModal()
        navigate("/")
    }

    return (
        <StyleModalError >
            <div>
                <h3>Voce não esta autenticado</h3>
                <button onClick={handleCloseandRedirect}>Ir para o Login</button>
            </div>
        </StyleModalError>
    )
}