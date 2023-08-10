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