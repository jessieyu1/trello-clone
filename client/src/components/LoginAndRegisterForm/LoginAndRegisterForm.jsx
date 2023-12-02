import { useLoginOrSignupStore } from "../../useStores/useLoginOrSignupStore";
import {
  LoginAndRegisterFormContainer,
  LoginAndRegisterFormTitle,
  LoginAndRegisterFormTitleLogo,
  LoginAndRegisterFormTitleText,
  LoginAndRegisterFormInputContainer,
  LoginAndRegisterFormInput,
  LoginAndRegisterFormTerms,
  LoginAndRegisterFormTermsText,
  LoginAndRegisterFormLink,
  LoginAndRegisterFormButton,
  LoginAndRegisterFormSwitch,
  LoginAndRegisterFormDivider,
  LoginAndRegisterFormTag,
} from "./LoginAndRegisterForm.styles";
import { LogoIcon, FooterIcon } from "./LoginAndRegisterFormIcon";

export default function LoginPageForm() {
  const {loginOrSignup,setLoginOrSignup} = useLoginOrSignupStore((state)=>({
    loginOrSignup:state.loginOrSignup,
    setLoginOrSignup:state.setLoginOrSignup
  }
  ))
  const changeLoginOrSignUpStatusHandler = () => {
    setLoginOrSignup(loginOrSignup==="login"?"signup":"login")
  }
  return (
    <LoginAndRegisterFormContainer>
      <LoginAndRegisterFormTitle>
        <LoginAndRegisterFormTitleLogo><LogoIcon /></LoginAndRegisterFormTitleLogo>
        {loginOrSignup==="signup"?<LoginAndRegisterFormTitleText><h5>Sign up to continue</h5></LoginAndRegisterFormTitleText>:null}
        {loginOrSignup==="login"?<LoginAndRegisterFormTitleText><h5>Log in to continue</h5></LoginAndRegisterFormTitleText>:null}
      </LoginAndRegisterFormTitle>
      <LoginAndRegisterFormTag>
        <LoginAndRegisterFormInputContainer>
          <LoginAndRegisterFormInput placeholder="Enter your email" />
        </LoginAndRegisterFormInputContainer>
        {loginOrSignup==="signup"?(<LoginAndRegisterFormTerms>
          <LoginAndRegisterFormTermsText>
            By signing up, I accept the Atlassian
            <LoginAndRegisterFormLink href="https://www.atlassian.com/legal/cloud-terms-of-service">Cloud Terms of Service</LoginAndRegisterFormLink>
            ` and acknowledge the `
            <LoginAndRegisterFormLink href="https://www.atlassian.com/legal/privacy-policy">Privacy Policy</LoginAndRegisterFormLink>
          </LoginAndRegisterFormTermsText>
        </LoginAndRegisterFormTerms>):null}
        <div>
          <LoginAndRegisterFormButton>
            {loginOrSignup==="signup"?<span>Sign up</span>:null}
            {loginOrSignup==="login"?<span>Continue</span>:null}
          </LoginAndRegisterFormButton>
        </div>
      </LoginAndRegisterFormTag>

      {loginOrSignup==="signup"?(<LoginAndRegisterFormSwitch onClick={changeLoginOrSignUpStatusHandler}>
        <LoginAndRegisterFormLink >
          Already have an Atlassian account? Log in
        </LoginAndRegisterFormLink>
      </LoginAndRegisterFormSwitch>):null}
      {loginOrSignup==="login"?(<LoginAndRegisterFormSwitch onClick={changeLoginOrSignUpStatusHandler}>
        <LoginAndRegisterFormLink >Create an account</LoginAndRegisterFormLink>
      </LoginAndRegisterFormSwitch>):null}
      <LoginAndRegisterFormDivider></LoginAndRegisterFormDivider>
      <div>
        <FooterIcon />
      </div>
    </LoginAndRegisterFormContainer>
  )
}
