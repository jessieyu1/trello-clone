import { useLoginOrSignupStore } from "../../stores/stores";
import {
  LoginPageFormContainer,
  LoginPageFormTitle,
  LoginPageFormTitleLogo,
  LoginPageFormTitleText,
  LoginPageFormInputContainer,
  LoginPageFormInput,
  LoginPageFormTerms,
  LoginPageFormTermsText,
  LoginPageFormLink,
  LoginPageFormButton,
  LoginPageFormSwitch,
  LoginPageFormDivider,
  LoginPageFormTag,
} from "./LoginPageForm.styles";
import { Logo, FooterIcon } from "./LoginPageFormIcon";

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
    <LoginPageFormContainer>
      <LoginPageFormTitle>
        <LoginPageFormTitleLogo><Logo /></LoginPageFormTitleLogo>
        {loginOrSignup==="signup"?<LoginPageFormTitleText><h5>Sign up to continue</h5></LoginPageFormTitleText>:null}
        {loginOrSignup==="login"?<LoginPageFormTitleText><h5>Log in to continue</h5></LoginPageFormTitleText>:null}
      </LoginPageFormTitle>
      <LoginPageFormTag>
        <LoginPageFormInputContainer>
          <LoginPageFormInput placeholder="Enter your email" />
        </LoginPageFormInputContainer>
        {loginOrSignup==="signup"?(<LoginPageFormTerms>
          <LoginPageFormTermsText>
            By signing up, I accept the Atlassian
            <LoginPageFormLink href="https://www.atlassian.com/legal/cloud-terms-of-service">Cloud Terms of Service</LoginPageFormLink>
            ` and acknowledge the `
            <LoginPageFormLink href="https://www.atlassian.com/legal/privacy-policy">Privacy Policy</LoginPageFormLink>
          </LoginPageFormTermsText>
        </LoginPageFormTerms>):null}
        <div>
          <LoginPageFormButton>
            {loginOrSignup==="signup"?<span>Sign up</span>:null}
            {loginOrSignup==="login"?<span>Continue</span>:null}
          </LoginPageFormButton>
        </div>
      </LoginPageFormTag>

      {loginOrSignup==="signup"?(<LoginPageFormSwitch onClick={changeLoginOrSignUpStatusHandler}>
        <LoginPageFormLink >
          Already have an Atlassian account? Log in
        </LoginPageFormLink>
      </LoginPageFormSwitch>):null}
      {loginOrSignup==="login"?(<LoginPageFormSwitch onClick={changeLoginOrSignUpStatusHandler}>
        <LoginPageFormLink >Create an account</LoginPageFormLink>
      </LoginPageFormSwitch>):null}
      <LoginPageFormDivider></LoginPageFormDivider>
      <div>
        <FooterIcon />
      </div>
    </LoginPageFormContainer>
  )
}
