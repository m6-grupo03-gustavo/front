// import { useAuth } from "../../hooks/useAuth"

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { FormEmailResetPassword } from "../../components/form/FormResetEmail";
import { StyledContainerLoginPage } from "../Login/style";

export const ResetPassword = () => {
  // const { user } = useAuth()
  return (
    <>
      <Header />
      <StyledContainerLoginPage>
        <FormEmailResetPassword />
      </StyledContainerLoginPage>
      <Footer />
    </>
  );
};
