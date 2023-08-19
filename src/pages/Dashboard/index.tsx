import { useEffect, useState } from "react"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { Container, ProfileAdsList, ProfileInfo } from "./style"
import { api } from "../../service/api"
import jwt_decode from "jwt-decode"
import { ModalRegisterCar } from "../../components/Modals/ModalRegisterCar"
import { useAuth } from "../../hooks/useAuth"


export const Dashboard = () =>{
    const { setModal } = useAuth()
    const [user, setUser] = useState({})
    const [cars, setCars] = useState([])
    const decodedToken = jwt_decode(localStorage.getItem("@fipe:token"))


    useEffect(() => {
        (async () => {
            const response = await api.get(`user/${decodedToken.sub}`)
            setUser(response.data)

            const response2 = await api.get("car")
            console.log(response2.data)
            setCars(response2.data)
            console.log(cars)
        })()
    }, [])

    return(
        <>
            <Header/>
            <Container>
                <div id="theme_color"></div>
                <ProfileInfo>
                    <div id="profile_image"></div>
                    <div id="profile_name">
                        <h1>{user.name}</h1>
                        <span>{user.account_state == "buyer" ? "Comprador" : "Anunciante"}</span>
                    </div>
                    <p>{user.description}</p>
                    <button onClick={() => setModal('registerCar')}>Criar anuncio</button>
                </ProfileInfo>
                <ProfileAdsList>
           
                   
                </ProfileAdsList>
            </Container>
            <Footer/>
            <ModalRegisterCar/>
        </>
    )
}