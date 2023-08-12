import { Link } from "react-router-dom"
import { Container } from "./style"

export const NavButtons = () => {
    return (
        <Container>
            <Link to={"/login"} id="login_button">Fazer login</Link>
            <Link to={"/register"} id="register_button">Cadastrar</Link>
        </Container>
    )
}