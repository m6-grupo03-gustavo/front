import { useEffect } from "react"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { Container, ProfileAdsList, ProfileInfo } from "./style"
import { api } from "../../service/api"
import jwt_decode from "jwt-decode"
import { ModalRegisterCar } from "../../components/Modals/ModalRegisterCar"
import { useAuth } from "../../hooks/useAuth"
import ShowcaseCars from "../../components/Showcase"
import { UserInitials } from "../../components/UserInitials"
import { ModalAdCreatedSucessfully } from "../../components/Modals/ModalAdCreatedSucessfully"
import { ModalUpdateAdress } from "../../components/Modals/ModalUpdateAddress"




export const Dashboard = () =>{
    const { setModal, user, setUser, dashboardCars, setDashboardCars, setModalUpdateAdress } = useAuth()

    

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
                }else{
                    await api.get(`user/${null}`)
                    //Garante nosso axios interceptor no caso de não obter token
                }
            } catch (error) {
                console.error(error)
            }
        })()
    }, [])

    useEffect(() => {
        (async () => {
            try {
                const token = localStorage.getItem("@fipe:token");
                
                    api.defaults.headers.common.Authorization = `Bearer ${token}`
                    const responseCarsByUser = await api.get(`car/user`)
                    setDashboardCars(responseCarsByUser.data.data)
            } catch (error) {
                console.error(error)
            }
        })()
    }, [dashboardCars])
    

    if(user != null){

        return(
            <>
                <Header/>
                <Container>
                    <div id="theme_color"></div>
                    <ProfileInfo>
                        <UserInitials userId={user.id} userName={user.name}/>
                        <div id="profile_name">
                            <h1>{user.name}</h1>
                            <span>{user.account_state == "buyer" ? "Comprador" : "Anunciante"}</span>
                        </div>
                        <p>{user.description}</p>
                        <button onClick={() => setModal('registerCar')}>Criar anuncio</button>
                        <button onClick={() => setModalUpdateAdress(true)}>Edita endereço</button>
                    </ProfileInfo>
                    <ProfileAdsList>
                        <ShowcaseCars renderOnAnotherPage="dashboard" listCar={dashboardCars}/>
                    </ProfileAdsList>
                </Container>
                <Footer/>
                <ModalRegisterCar/>
                <ModalAdCreatedSucessfully/>
                <ModalUpdateAdress/>
            </>
        )
    }else{
        <>
        <Header/>
        <Footer/>
        </>
    }

}