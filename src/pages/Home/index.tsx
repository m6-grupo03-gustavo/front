import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import ShowcaseCars from "../../components/Showcase"


export const Home = () =>{
    return(
        <>
            <Header/>
            <main >
                <div>
                    <section>Filtros</section>
                    <section>
                        <ShowcaseCars/>
                    </section>
                </div>
                <section>Pagination</section>
            </main>
            <Footer/>
        </>
    )
}