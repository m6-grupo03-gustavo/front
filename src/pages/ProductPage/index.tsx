import { useEffect, useState } from "react"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { UserInitials } from "../../components/UserInitials"
import { CarDescription, CarImages, CarInfo, CarMainImage, CommentsSection, Container, PostCommentSection, ProfileCard } from "./styles"
import { api } from "../../service/api"
import { Link } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"
import { Comment } from "../../components/Comment"
import FormComment from "../../components/form/FormComments"

export interface IComment {
   id: number
   comment: string
   register_date: string
   username: string
   userid: number
}

export const ProductPage = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [token, setToken]: any = useState(false)
    const [comments, setComments] = useState<IComment[] | null>(null)
    const {car, setCar, currentUser} = useAuth()

    useEffect(() => {
        (async () => {
            try {
                    setToken(localStorage.getItem("@fipe:token"))
                    api.defaults.headers.common.Authorization = `Bearer ${token}`
                    if(car != null){

                        const responseCar = await api.get(`car/${car.id}`)
                        setCar(responseCar.data)
    
                        const responseComments = await api.get(`comments/${car.id}`)
                        setComments(responseComments.data)
                    }
            } catch (error) {
                console.error(error)
            }
        })()
    }, [token, comments])
     
    if (car !== null) {
        return (
            <>
                <Header/>
                <Container>
                    <div id="theme_color"></div>



                    <div className="container_main_sections">

                        <div className="section_one">

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

                                <CommentsSection>
                                    <h1>Comentários</h1>
                                    <ul>
                                        {comments?.map((comment) => <Comment key={comment.id} comment={comment}/>)}
                                    </ul>
                                </CommentsSection>
                                <PostCommentSection>
                                    <div className="post_comment_header">
                                        {currentUser ? <> <UserInitials userId={currentUser.id} userName={currentUser.name}/> <h2>{currentUser.name}</h2> </> : <h2>Faça o login para comentar</h2>}
                                    </div>
                                    <FormComment/>
                                    <div className="sugestions_container">
                                        <span>Gostei muito!</span>
                                        <span>Incrível</span>
                                        <span>Recomendarei para meus amigos!</span>
                                    </div>
                                </PostCommentSection>
                        </div>



                        
                        </div>

                        <div className="section_two">


                                <CarImages>
                                    <h1>Fotos</h1>
                                </CarImages>

                                <ProfileCard>
                                    <UserInitials userId={car.user.id} userName={car.user.name}/>
                                    <h1>{car.user.name}</h1>
                                    <p>{car.user.description}</p>
                                    <Link to={"/dashboard"} className="see_all_ads_button">Ver todos os anúncios</Link>
                                </ProfileCard>
                        </div>
                        
                    </div>





                    
                    
                </Container>
                <Footer/>
            </>
        )
    }
}