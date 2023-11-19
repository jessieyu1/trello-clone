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
import{VideoIcon} from './MainBodyInfoIcon'

export default function MainBodyInfo() {
  return (
    <MainBodyInfoContainer>
      <MainBodyInfoTitle>
        <MainBodyInfoTitleH2> Trello brings all your tasks, teammates, and tools together</MainBodyInfoTitleH2>
        <MainBodyInfoTitleP>Keep everything in the same place—even if your team isn’t.</MainBodyInfoTitleP>
      </MainBodyInfoTitle>
      <MainBodyInfoForm >
        <MainBodyInfoInput type="text" placeholder='Email'/>
        <MainBodyInfoButton>Sign up - it’s free!</MainBodyInfoButton>
      </MainBodyInfoForm>
      <MainBodyInfoVideo>
        <MainBodyInfoVideoText>Watch video</MainBodyInfoVideoText>
        <MainBodyInfoVideoIcon><VideoIcon/></MainBodyInfoVideoIcon>
      </MainBodyInfoVideo>
    </MainBodyInfoContainer>
  )
}
