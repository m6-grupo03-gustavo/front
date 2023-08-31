import { useEffect, useRef } from "react"
import { useAuth } from "../../../hooks/useAuth"
import { StyleModalRemoveUser } from "./style"
import { BtnSubmit } from "../../Buttons/btnSubmit"

interface IModalRemoveUserProps{
    id: number
}


export const ModalRemoveUser = ({id}: IModalRemoveUserProps) => {
    const { userRemove, setModalRemoveUser, modalRemoveUser } = useAuth()
    const modalRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const handleOutclick = (e: any) => {
            if(!modalRef.current?.contains(e.target)){
                setModalRemoveUser(false)
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
                setModalRemoveUser(false)
            }   
        }
        window.addEventListener('keydown', handleKeydown )
        return () => {
            window.removeEventListener('keydown', handleKeydown )
        }
    }, [])


    if(modalRemoveUser == true){
        return (
            <StyleModalRemoveUser>
                <article ref={modalRef}>
                    <header>
                        <h5>Excluir Usuário</h5>
                        <button className="closeModal" onClick={() => setModalRemoveUser(false)}>X</button>
                    </header>
                    <h6>Tem certeza que deseja deletar seu Usuário?</h6>
                    <p>Essa ação não pode ser desfeita. Isso excluirá seus anúncio e dados permanentemente de nosso servidor.</p>

                    <div className="containerBtns">
                        <BtnSubmit text="Cancelar" typeStyle="grey" onClick={() => setModalRemoveUser(false)}/>
                        <BtnSubmit text="Sim, excluir meu usuário" typeStyle="delete" onClick={() => userRemove(id)}/>

                    </div>
                </article>
            </StyleModalRemoveUser>
        )
    }else{
        <></>
    }
}