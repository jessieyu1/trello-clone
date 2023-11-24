import { LoginPageContainer,LoginPageBackGroundImage} from "./LoginPage.styles"
import loginImage from "../images/loginImage.jpeg"
import LoginPageForm from "../components/LoginPageForm/LoginPageForm"

function LoginPage() {
  return (
    <LoginPageContainer>
      <LoginPageBackGroundImage src={loginImage}/>
      <LoginPageForm />
    </LoginPageContainer>
  )
}

export default LoginPage
