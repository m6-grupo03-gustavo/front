import { Footer } from "../../components/Footer";
import FomrLogin from "../../components/form/formLogin";
import { Header } from "../../components/Header";
import { StyledContainerLoginPage, StyledToastContainer } from "./style";

import 'react-toastify/dist/ReactToastify.css';
export const Login = () => {
  return (
    <>
      <Header />
      <StyledContainerLoginPage>
        <FomrLogin />
      </StyledContainerLoginPage>
      <StyledToastContainer theme='dark'/>
      <Footer />


    </>
  );
};
