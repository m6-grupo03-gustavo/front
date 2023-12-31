import { useEffect, useRef } from "react"
import { useAuth } from "../../../hooks/useAuth"
import { StyleModalRegisterCar } from "./style"
import FomrRegisterCar from "../../form/FormRegisterCar"



export const ModalRegisterCar = () => {
    const { modal, setModal } = useAuth()
    const modalRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const handleOutclick = (e: any) => {
            if(!modalRef.current?.contains(e.target)){
                setModal('off')
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
                setModal('off')
            }   
        }
        window.addEventListener('keydown', handleKeydown )
        return () => {
            window.removeEventListener('keydown', handleKeydown )
        }
    }, [])

    if(modal == 'registerCar'){
        return (
            <StyleModalRegisterCar>
                <article ref={modalRef}>
                    <FomrRegisterCar/>
                </article>
            </StyleModalRegisterCar>
        )
    }else{
        <></>
    }
}