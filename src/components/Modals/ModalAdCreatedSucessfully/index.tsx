import { useEffect, useRef } from "react"
import { useAuth } from "../../../hooks/useAuth"
import { StyleModalAdCreatedSucessfully } from "./style"

export const ModalAdCreatedSucessfully = () => {
    const {  modalRegisterAdSucess, setModalRegisterAdSucess } = useAuth()
    const modalRef = useRef<HTMLDivElement>(null)


    useEffect(() => {
        const handleOutclick = (e: MouseEvent) => {
            if(!modalRef.current?.contains(e.target)){
                setModalRegisterAdSucess(false)
            }
        }
        window.addEventListener('mousedown',handleOutclick )
        return () => {
            window.removeEventListener('mousedown', handleOutclick )
        }
    }, [])


    useEffect(() => {
        const handleKeydown = (e: KeyboardEvent) => {
            if(e.key == 'Escape'){
                setModalRegisterAdSucess(false)
            }   
        }
        window.addEventListener('keydown', handleKeydown )
        return () => {
            window.removeEventListener('keydown', handleKeydown )
        }
    }, [])

    if(modalRegisterAdSucess == true){
        return (
            <StyleModalAdCreatedSucessfully>
                <article ref={modalRef}>
                    <header>
                        <h5>Sucesso</h5>
                        <button className="closeModal" onClick={() => setModalRegisterAdSucess(false)}>X</button>
                    </header>
                    <h6>Seu anúncio foi criado com sucesso!</h6>
                    <p>Agora você poderá ver seus negócios crescendo em grande escala</p>
                </article>
            </StyleModalAdCreatedSucessfully>
        )
    }else{
        <></>
    }
}