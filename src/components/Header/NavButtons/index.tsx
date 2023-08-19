import { Link, useLocation } from "react-router-dom"
import { Container, ContainerHomePage } from "./style"

export const NavButtons = () => {
    const location = useLocation()
    if(location.pathname == '/'){
        return (
            <ContainerHomePage>
                <Link to={"/login"} id="login_button">Fazer login</Link>
                <Link to={"/register"} id="register_button">Cadastrar</Link>
            </ContainerHomePage>
        )

    }else{
        return (
            <Container>
                <Link to={"/login"} id="login_button">Fazer login</Link>
                <Link to={"/register"} id="register_button">Cadastrar</Link>
            </Container>
        )
    }
}