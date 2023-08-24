import { useEffect, useRef } from "react"
import { useAuth } from "../../../hooks/useAuth"
import { StyleModalRemoveAd } from "./style"
import { BtnSubmit } from "../../Buttons/btnSubmit"

interface IModalRemoveAdProps{
    id: number
    setModalRemoveAdOpen: React.Dispatch<React.SetStateAction<boolean>>
    modalRemoveAdOpen: boolean
}


export const ModalRemoveAd = ({id, setModalRemoveAdOpen , modalRemoveAdOpen}: IModalRemoveAdProps) => {
    const { carRemove } = useAuth()
    const modalRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const handleOutclick = (e: any) => {
            if(!modalRef.current?.contains(e.target)){
                setModalRemoveAdOpen(false)
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
                setModalRemoveAdOpen(false)
            }   
        }
        window.addEventListener('keydown', handleKeydown )
        return () => {
            window.removeEventListener('keydown', handleKeydown )
        }
    }, [])

    if(modalRemoveAdOpen == true){
        return (
            <StyleModalRemoveAd>
                <article ref={modalRef}>
                    <header>
                        <h5>Excluir anúncio</h5>
                        <button className="closeModal" onClick={() => setModalRemoveAdOpen(false)}>X</button>
                    </header>
                    <h6>Tem certeza que deseja remover este anúncio?</h6>
                    <p>Essa ação não pode ser desfeita. Isso excluirá seu anúncio permanentemente de sua conta e removerá esse dado de nosso servidor.</p>

                    <div className="containerBtns">
                        <BtnSubmit text="Cancelar" typeStyle="grey" onClick={() => setModalRemoveAdOpen(false)}/>
                        <BtnSubmit text="Sim, excluir anúncio" typeStyle="delete" onClick={() => carRemove(id)}/>

                    </div>
                </article>
            </StyleModalRemoveAd>
        )
    }else{
        <></>
    }
}