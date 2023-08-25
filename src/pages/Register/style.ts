import { ToastContainer, ToastContainerProps } from 'react-toastify';
import styled from 'styled-components'


export const StyledContainerRegisterPage = styled.main`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;


`

export const StyledToastContainer = styled(ToastContainer).attrs<ToastContainerProps>({
  // Adicionando as props aqui
  position: "bottom-right",
  autoClose: 5000,
  hideProgressBar: false,
  newestOnTop: false,
  closeOnClick: true,
  rtl: false,
  pauseOnFocusLoss: true,
  draggable: true,
  pauseOnHover: true,
})`
div{
  font-size: 1.8rem; 
  /* background-color: black; */
}

`;
