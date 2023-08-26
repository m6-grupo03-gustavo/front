import { useAuth } from "../../../hooks/useAuth"
import { useEffect, useRef } from "react"
import { StyleModalEmail } from "./style"


export const ModalEmail = () =>{
    const {  emailModal, setEmaiModal  } = useAuth()

    const modalRef = useRef<HTMLDivElement>(null)


    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const handleOutclick = (e: any) => {
            if(!modalRef.current?.contains(e.target)){
                setEmaiModal(false)
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
                setEmaiModal(false)
            }   
        }
        window.addEventListener('keydown', handleKeydown )
        return () => {
            window.removeEventListener('keydown', handleKeydown )
        }
    }, [])

    if(emailModal === true){
        return(
            <StyleModalEmail ref={modalRef}>
                <div>
                    <header>
                        <h5>Email sent successfully!</h5>
                    </header>
                    <p>An email to reset your password has been sent to your personal email address.</p>
                    <p>Please note that the reset link will expire in 5 minutes.</p>
                    <p>If you do not find the email in your inbox, kindly check your spam folder.</p>
                </div>
            </StyleModalEmail>
        )
    }
    return(
        <></>
    )
}