import { useEffect, useState } from "react"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { Container, ProfileAdsList, ProfileInfo } from "./style"
import { api } from "../../service/api"
import jwt_decode from "jwt-decode"
import { ModalRegisterCar } from "../../components/Modals/ModalRegisterCar"
import { useAuth } from "../../hooks/useAuth"
import CardCar from "../../components/Showcase/Card"
import { ICar } from "../../providers/AuthProvider"




export const Dashboard = () =>{
    const { setModal, user, setUser } = useAuth()
    const [cars, setCars] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const token = localStorage.getItem("@fipe:token");
                if(token){
                    api.defaults.headers.common.Authorization = `Bearer ${token}`
                    const decodedToken : unknown = jwt_decode(token);
                    const userId = decodedToken.sub;
                    const response = await api.get(`user/${userId}`);
                    setUser(response.data);

                    const responseCarsByUser : ICar[] = await api.get(`car/user`)
                    setCars(responseCarsByUser.data.data)
                    console.log(cars)
                }else{
                    await api.get(`user/${null}`)
                    //Garante nosso axios interceptor no caso de não obter token
                }
            } catch (error) {
                console.error(error)
            }
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
                    {cars.map((car) =>(
                        <CardCar key={car.id} car={car}></CardCar> 
                    ))}
                </ProfileAdsList>
            </Container>
            <Footer/>
            <ModalRegisterCar/>
        </>
    )
}