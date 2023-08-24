import { useEffect, useRef } from "react"
import { useAuth } from "../../../hooks/useAuth"
import { StyleModalUpdateUserInfo } from "./style"
import FormUpdateUserInfo from "../../Form/FormUpdateUserInfo"

export const ModalUpdateUserInfo = () => {
    const {  modalUpdateUserInfo, setModalUpdateUserInfo } = useAuth()
    const modalRef = useRef<HTMLDivElement>(null)


    useEffect(() => {
        const handleOutclick = (e: MouseEvent) => {
            if(!modalRef.current?.contains(e.target)){
                setModalUpdateUserInfo(false)
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
                setModalUpdateUserInfo(false)
            }   
        }
        window.addEventListener('keydown', handleKeydown )
        return () => {
            window.removeEventListener('keydown', handleKeydown )
        }
    }, [])

    if(modalUpdateUserInfo == true){
        return (
            <StyleModalUpdateUserInfo>
                <section className="containerForm" ref={modalRef}>
                    <FormUpdateUserInfo/>
                </section>
            </StyleModalUpdateUserInfo>
        )
    }else{
        <></>
    }
}