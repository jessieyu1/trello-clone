import { LandingPageNavigatorContainer,LandingPageNavigatorRootContainer } from './LandingPageNavigator.styles'
import LogoName from './components/LogoName/LogoName'
import LoginSign from './components/LoginSign/LoginSign'

export default function LandingPageNavigator() {
  return (
    <LandingPageNavigatorRootContainer>
      <LandingPageNavigatorContainer>
        <LogoName />
        <LoginSign />
      </LandingPageNavigatorContainer>
    </LandingPageNavigatorRootContainer>
  )
}
