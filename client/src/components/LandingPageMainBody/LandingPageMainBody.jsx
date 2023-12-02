import { LandingPageMainBodyContainer, LandingPageMainBodyRootContainer } from './LandingPageMainBody.styles';
import LandingPageMainBodyInfo from './components/LandingPageMainBodyInfo/LandingPageMainBodyInfo';
import LandingPageMainBodyImg from './components/LandingPageMainBodyImg/LandingPageMainBodyImg';

export default function LandingPageMainBody() {
  return (
    <LandingPageMainBodyRootContainer>
      <LandingPageMainBodyContainer>
        <LandingPageMainBodyInfo />
        <LandingPageMainBodyImg />
      </LandingPageMainBodyContainer>
    </LandingPageMainBodyRootContainer>
  )
}
