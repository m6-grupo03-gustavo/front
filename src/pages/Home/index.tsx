import { Banner } from "../../components/Banner"
import { FilterMain } from "../../components/Filters"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { Pagination } from "../../components/Pagination"
import ShowcaseCars from "../../components/Showcase"
import { StyleHomePage, StyleContainerShowcaseAndFilters, StyleShopCars } from "./style"


export const Home = () =>{
    return(
        <>
            <Header/>
            <StyleHomePage >
                <Banner/>
                <StyleContainerShowcaseAndFilters>
                    <section><FilterMain/></section>
                    <StyleShopCars>
                        <ShowcaseCars/>
                        <Pagination/>
                    </StyleShopCars>
                </StyleContainerShowcaseAndFilters>
            </StyleHomePage>
            <Footer/>
        </>
    )
}