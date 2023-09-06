import { Link, useLocation } from "react-router-dom"
import { Container, ContainerHomePage,ContainerCurrentUser } from "./style"
import { useAuth } from "../../../hooks/useAuth"
import { BiLogOutCircle } from "react-icons/bi"

export const NavButtons = () => {
    const location = useLocation()
    const {  currentUser, userLogout  } = useAuth()
    if(currentUser != null && location.pathname == '/'){
        return (
            <ContainerHomePage>
                <div className="userLogout" onClick={() => userLogout()}>
                    <p>Logout</p>
                    <BiLogOutCircle size={40} style={{
                            color:  "#ADB5BD",
                            cursor: 'pointer',
                            margin: "0"
                    }}/>
                </div>
            </ContainerHomePage>
        )

    } else if(currentUser != null){
        return (
            <ContainerCurrentUser>
                <div className="userLogout" onClick={() => userLogout()}>
                    <p>Logout</p>
                    <BiLogOutCircle size={40} style={{
                            color:  "#ADB5BD",
                            cursor: 'pointer',
                            margin: "0"
                    }}/>
                </div>
            </ContainerCurrentUser>
        )

    }
    else if(location.pathname == '/'){
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