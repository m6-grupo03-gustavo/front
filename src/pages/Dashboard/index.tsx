import { ModalRegisterCar } from "../../components/Modals/ModalRegisterCar"
import { useAuth } from "../../hooks/useAuth"




export const Dashboard = () =>{
    const { setModal } = useAuth()
    return(
        <>
            <button onClick={() => setModal('registerCar')}>Criar anúncio</button>
            <h1>DASHBOARD </h1>
            <ModalRegisterCar/>
        </>
    )
}