import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { FormUpdatePassword } from "../../../components/form/FormUpdatePassword";
import { StyledContainerLoginPage } from "../../Login/style";
import { StyledToastContainer } from "./style";

export const ResetPassword = () => {
  return (
    <>
      <Header />
      <StyledContainerLoginPage>
        <FormUpdatePassword />
      </StyledContainerLoginPage>
      <Footer />
      <StyledToastContainer/>
    </>
  );
};
