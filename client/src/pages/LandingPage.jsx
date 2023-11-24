import { LandingPageContainer } from "./LandingPage.styles";
import MainBody from "../components/MainBody/MainBody";
import Navigator from "../components/Navigator/Navigator";

export default function LandingPage() {
  return (
    <LandingPageContainer>
      <Navigator/>
      <MainBody/>
    </LandingPageContainer>
  );
}