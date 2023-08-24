import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { FormUpdatePassword } from "../../../components/form/FormUpdatePassword";
import { StyledContainerLoginPage } from "../../Login/style";

export const ResetPassword = () => {
  return (
    <>
      <Header />
      <StyledContainerLoginPage>
        <FormUpdatePassword />
      </StyledContainerLoginPage>
      <Footer />
    </>
  );
};
