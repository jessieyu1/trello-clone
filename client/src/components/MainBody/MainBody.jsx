import { MainBodyContainer, MainBodyRootContainer } from './MainBody.styles';
import MainBodyInfo from './components/MainBodyInfo/MainBodyInfo';
import MainBodyImg from './components/MainBodyImg/MainBodyImg';

export default function MainBody() {
  return (
    <MainBodyRootContainer>
      <MainBodyContainer>
        <MainBodyInfo />
        <MainBodyImg />
      </MainBodyContainer>
    </MainBodyRootContainer>
  )
}
