import { FilterMain } from "../../components/Filters"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import ShowcaseCars from "../../components/Showcase"
import { StyleHomePage, StyleContainerShowcaseAndFilters } from "./style"


export const Home = () =>{
    return(
        <>
            <Header/>
            <StyleHomePage >
                <div className="banner">
                    <h1>Motors Shop</h1>
                    <h3>A melhor plataforma de anúncios de carros do país</h3>
                </div>
                <StyleContainerShowcaseAndFilters>
                    <section><FilterMain/></section>
                    <section>
                        <ShowcaseCars/>
                    </section>
                </StyleContainerShowcaseAndFilters>
                <section>Pagination</section>
            </StyleHomePage>
            <Footer/>
        </>
    )
}