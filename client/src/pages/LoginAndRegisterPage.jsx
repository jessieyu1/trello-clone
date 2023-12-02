import {
  LoginAndRegisterPageContainer,
  LoginAndRegisterPageBackGroundImage,
} from "./LoginAndRegisterPage.styles";
import loginAndRegisterImg from "../assets/loginAndRegisterImage.jpeg";
import LoginAndSignUpForm from "../components/LoginAndRegisterForm/LoginAndRegisterForm";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

function LoginAndRegisterPage() {
  return (
    <LoginAndRegisterPageContainer>
      <LoginAndRegisterPageBackGroundImage src={loginAndRegisterImg} />
      <LoginAndSignUpForm />
      <Button style={{position:"fixed",right:"0px",bottom:"0px"}}>
        <Link to="/">Back to Home Page</Link>
      </Button>
    </LoginAndRegisterPageContainer>
  );
}

export default LoginAndRegisterPage;
