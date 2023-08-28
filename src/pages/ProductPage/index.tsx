import { useEffect, useState } from "react"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { UserInitials } from "../../components/UserInitials"
import { CarDescription, CarImages, CarInfo, CarMainImage, Container, ProfileCard } from "./styles"
import { api } from "../../service/api"
import { Link } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"


export const ProductPage = () => {
    const [token, setToken]: any = useState(false)
    const {car, setCar} = useAuth()

    useEffect(() => {
        (async () => {
            try {
                    setToken(localStorage.getItem("@fipe:token"))
                    api.defaults.headers.common.Authorization = `Bearer ${token}`

                    const responseCar = await api.get(`car/${car.id}`)
                    setCar(responseCar.data)
                    console.log(car.carImages[0].url)
            } catch (error) {
                console.error(error)
            }
        })()
    }, [token])
    
    if (car !== null) {
        return (
            <>
                <Header/>
                <Container>
                    <div id="theme_color"></div>
                    
                    <CarMainImage>
                        <img src={car.carImages[0].url} alt={car.model} />
                    </CarMainImage>
    
                    <div className="sections_container">
                        <CarInfo>
                            <h1>{car.brand} {car.model}</h1>
                            <div className="tags_container">
                                <span>{car.year}</span>
                                <span>{car.km} KM</span>
                            </div>
                            <p>R$ {car.value},00</p>
                            {
                                token ?
                                <button>Comprar</button>
                                :
                                <Link to={"/login"}>Comprar</Link>
                            }
                        </CarInfo>
                        <CarDescription>
                            <h1>Descrição</h1>
                            <p>{car.description}</p>
                        </CarDescription>
                        <CarImages>
                            <h1>Fotos</h1>
                        </CarImages>
                        <ProfileCard>
                            <UserInitials userId={1} userName={"Samuel Leão"}/>
                            <h1>Samuel Leão</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum magnam similique molestias cumque? Neque, temporibus sequi odio amet culpa est excepturi quaerat inventore ducimus nulla? Quo quis earum itaque eius?</p>
                            <Link to={"/"} className="see_all_ads_button">Ver todos os anúncios</Link>
                        </ProfileCard>
                    </div>
                </Container>
                <Footer/>
            </>
        )
    }
}