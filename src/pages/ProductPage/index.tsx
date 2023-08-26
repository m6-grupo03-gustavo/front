import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { CarDescription, CarInfo, CarMainImage, Container } from "./styles"

export const ProductPage = () => {
    return (
        <>
            <Header/>
            <Container>
            <div id="theme_color"></div>
            <CarMainImage>
                <img src="public/car_main_image.svg" alt="" />
            </CarMainImage>

            <CarInfo>
                <h1>Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200 </h1>
            </CarInfo>

            <CarDescription>
                <h1>Descrição</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </CarDescription>

            </Container>
            <Footer/>
        </>
    )
}