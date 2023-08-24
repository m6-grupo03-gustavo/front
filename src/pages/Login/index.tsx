import { Footer } from "../../components/Footer";
import FomrLogin from "../../components/Form/FormLogin";
import { Header } from "../../components/Header";
import { StyledContainerLoginPage } from "./style";

export const Login = () => {
  return (
    <>
      <Header />
      <StyledContainerLoginPage>
        <FomrLogin />
      </StyledContainerLoginPage>
      <Footer />
    </>
  );
};
