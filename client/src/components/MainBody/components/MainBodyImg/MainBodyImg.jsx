import { MainBodyImgContainer,MainBodyImgImage } from './MainBodyImg.styles'
import MainBodyImage from '../../../../images/TrelloUICollage_4x.webp'
export default function MainBodyImg() {
  return (
    <MainBodyImgContainer>
      <MainBodyImgImage src={MainBodyImage} alt="main body img"/>
    </MainBodyImgContainer>
  )
}
