import { useEffect, useRef } from "react"
import { StyleModalUpdateCar } from "./style"
import FormUpdateCar from "../../Form/FormUpdateCar"

interface IModalUpdateCar{
    id: number
    setModalUpdateCar: React.Dispatch<React.SetStateAction<boolean>>
    modalUpdateCar: boolean
}


export const ModalUpdateCar = ({ setModalUpdateCar , modalUpdateCar}: IModalUpdateCar) => {

    const modalRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const handleOutclick = (e: any) => {

            if(!modalRef.current?.contains(e.target)){
                setModalUpdateCar(false)
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
                setModalUpdateCar(false)
            }   
        }
        window.addEventListener('keydown', handleKeydown )
        return () => {
            window.removeEventListener('keydown', handleKeydown )
        }
    }, [])

    if(modalUpdateCar == true){
        return (
            <StyleModalUpdateCar>
                <article ref={modalRef} className="container__modal--update">
                    <FormUpdateCar/>
                </article>
            </StyleModalUpdateCar>
        )
    }else{
        <></>
    }
}