import { LandingPageContainer } from "./LandingPage.styles";
import LandingPageMainBody from "../components/LandingPageMainBody/LandingPageMainBody";
import LandingPageNavigator from "../components/LandingPageNavigator/LandingPageNavigator";

export default function LandingPage() {
  return (
    <LandingPageContainer>
      <LandingPageNavigator/>
      <LandingPageMainBody/>
    </LandingPageContainer>
  );
}