import { useEffect, useRef } from "react"
import { useAuth } from "../../../hooks/useAuth"
import { StyleModalRegisterSucess } from "./style"
import { BtnSubmit } from "../../Buttons/btnSubmit"
import { useNavigate } from "react-router-dom"




export const ModalRegisterSucess = () => {
    const {  modalRegisterSucess, setModalRegisterSucess } = useAuth()
    const modalRef = useRef<HTMLDivElement>(null)
    const navigate = useNavigate()

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const handleOutclick = (e: any) => {
            if(!modalRef.current?.contains(e.target)){
                setModalRegisterSucess(false)
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
                setModalRegisterSucess(false)
            }   
        }
        window.addEventListener('keydown', handleKeydown )
        return () => {
            window.removeEventListener('keydown', handleKeydown )
        }
    }, [])

    if(modalRegisterSucess == true){
        return (
            <StyleModalRegisterSucess>
                <article ref={modalRef}>
                    <header>
                        <h5>Sucesso</h5>
                        <button className="closeModal" onClick={() => setModalRegisterSucess(false)}>X</button>
                    </header>
                    <h6>Sua conta foi registrada com sucesso</h6>
                    <p>Agora você poderá ver seus negócios crescendo em grande escala</p>

                    <div className="containerBtns">
                        <BtnSubmit text="Ir para Login" typeStyle="brand1" onClick={() => navigate('/login')}/>
                    </div>
                </article>
            </StyleModalRegisterSucess>
        )
    }else{
        <></>
    }
}