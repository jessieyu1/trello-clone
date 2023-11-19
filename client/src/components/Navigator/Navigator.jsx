import { NavigatorContainer,NavigatorRootContainer } from './Navigator.styles'
import LogoName from './components/LogoName/LogoName'
import LoginSign from './components/LoginSign/LoginSign'

export default function Navigator() {
  return (
    <NavigatorRootContainer>
      <NavigatorContainer>
        <LogoName />
        <LoginSign />
      </NavigatorContainer>
    </NavigatorRootContainer>
  )
}
