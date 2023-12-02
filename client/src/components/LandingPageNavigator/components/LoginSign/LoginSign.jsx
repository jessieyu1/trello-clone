import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { 
  ResponsiveIcon, 
  LogoSignContainer, 
  SignupContainer, 
  LoginContainer,
  LoginSignLink,
 } from "./LogoSign.styles";
import { useLoginOrSignupStore } from "../../../../useStores/useLoginOrSignupStore";

export default function LoginSign() {
  const {setLoginOrSignup} = useLoginOrSignupStore((state)=>({
    setLoginOrSignup:state.setLoginOrSignup
  }))
  return (
      <LogoSignContainer >
        <LoginSignLink to="/loginOrRegister" onClick={()=>setLoginOrSignup("login")}><LoginContainer>Log In</LoginContainer></LoginSignLink>       
        <LoginSignLink to="/loginOrRegister" onClick={()=>setLoginOrSignup("signup")}><SignupContainer>Get Trello for free</SignupContainer></LoginSignLink>
        <ResponsiveIcon>
          <IconButton>
            <MenuIcon 
              sx={{color:"black"}}
            />
          </IconButton>
        </ResponsiveIcon>
      </LogoSignContainer>
  )
}
