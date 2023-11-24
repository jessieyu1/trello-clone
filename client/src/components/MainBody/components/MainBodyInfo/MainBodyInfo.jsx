import {
  MainBodyInfoVideo,
  MainBodyInfoVideoText,
  MainBodyInfoVideoIcon,
  MainBodyInfoForm,
  MainBodyInfoInput,
  MainBodyInfoButton,
  MainBodyInfoContainer,
  MainBodyInfoTitle,
  MainBodyInfoTitleH2,
  MainBodyInfoTitleP,
} from './MainBodyInfo.styles'
import {LoginSignLink} from '../../../Navigator/components/LoginSign/LogoSign.styles'
import{VideoIcon} from './MainBodyInfoIcon'
import { useLoginOrSignupStore } from '../../../../stores/stores'

export default function MainBodyInfo() {
  const {setLoginOrSignup} = useLoginOrSignupStore((state)=>({
    setLoginOrSignup:state.setLoginOrSignup
  }))
  return (
    <MainBodyInfoContainer>
      <MainBodyInfoTitle>
        <MainBodyInfoTitleH2> Trello brings all your tasks, teammates, and tools together</MainBodyInfoTitleH2>
        <MainBodyInfoTitleP>Keep everything in the same place—even if your team isn’t.</MainBodyInfoTitleP>
      </MainBodyInfoTitle>
      <MainBodyInfoForm >
        <MainBodyInfoInput type="text" placeholder='Email'/>
        <LoginSignLink to="login" onClick={()=>setLoginOrSignup("signup")}>
          <MainBodyInfoButton >
          Sign up - it’s free!
        </MainBodyInfoButton>
        </LoginSignLink>
      </MainBodyInfoForm>
      <MainBodyInfoVideo>
        <MainBodyInfoVideoText>Watch video</MainBodyInfoVideoText>
        <MainBodyInfoVideoIcon><VideoIcon/></MainBodyInfoVideoIcon>
      </MainBodyInfoVideo>
    </MainBodyInfoContainer>
  )
}
