import { LandingPageMainBodyImgContainer,LandingPageMainBodyImgImage } from './LandingPageMainBodyImg.styles'
import LandingPageMainBodyImage from '../../../../assets/TrelloUICollage_4x.webp'
export default function LandingPageMainBodyImg() {
  return (
    <LandingPageMainBodyImgContainer>
      <LandingPageMainBodyImgImage src={LandingPageMainBodyImage} alt="landing page main body img"/>
    </LandingPageMainBodyImgContainer>
  )
}
