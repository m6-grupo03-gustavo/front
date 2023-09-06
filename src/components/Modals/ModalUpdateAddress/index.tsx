import { useEffect, useRef } from "react"
import { useAuth } from "../../../hooks/useAuth"
import { StyleModalUpdateAdress } from "./style"
import FormUpdateAdress from "../../form/FormUpdateAdress"

export const ModalUpdateAdress = () => {
    const {  modalUpdateAdress, setModalUpdateAdress } = useAuth()
    const modalRef = useRef<HTMLDivElement>(null)


    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const handleOutclick = (e: any) => {
            if(!modalRef.current?.contains(e.target)){
                setModalUpdateAdress(false)
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
                setModalUpdateAdress(false)
            }   
        }
        window.addEventListener('keydown', handleKeydown )
        return () => {
            window.removeEventListener('keydown', handleKeydown )
        }
    }, [])

    if(modalUpdateAdress == true){
        return (
            <StyleModalUpdateAdress>
                <section className="containerForm" ref={modalRef}>
                    <FormUpdateAdress/>
                </section>
            </StyleModalUpdateAdress>
        )
    }else{
        <></>
    }
}