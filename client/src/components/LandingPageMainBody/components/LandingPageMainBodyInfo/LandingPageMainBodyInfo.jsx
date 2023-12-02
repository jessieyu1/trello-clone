import {
  LandingPageMainBodyInfoVideo,
  LandingPageMainBodyInfoVideoText,
  LandingPageMainBodyInfoVideoIcon,
  LandingPageMainBodyInfoForm,
  LandingPageMainBodyInfoInput,
  LandingPageMainBodyInfoButton,
  LandingPageMainBodyInfoContainer,
  LandingPageMainBodyInfoTitle,
  LandingPageMainBodyInfoTitleH2,
  LandingPageMainBodyInfoTitleP,
} from "./LandingPageMainBodyInfo.styles";
import { LoginSignLink } from "../../../LandingPageNavigator/components/LoginSign/LogoSign.styles";
import { VideoIcon } from "./LandingPageMainBodyInfoIcon";
import { useLoginOrSignupStore } from "../../../../useStores/useLoginOrSignupStore";

export default function LandingPageMainBodyInfo() {
  const { setLoginOrSignup } = useLoginOrSignupStore((state) => ({
    setLoginOrSignup: state.setLoginOrSignup,
  }));
  return (
    <LandingPageMainBodyInfoContainer>
      <LandingPageMainBodyInfoTitle>
        <LandingPageMainBodyInfoTitleH2>
          {" "}
          Trello brings all your tasks, teammates, and tools together
        </LandingPageMainBodyInfoTitleH2>
        <LandingPageMainBodyInfoTitleP>
          Keep everything in the same place—even if your team isn’t.
        </LandingPageMainBodyInfoTitleP>
      </LandingPageMainBodyInfoTitle>
      <LandingPageMainBodyInfoForm>
        <LandingPageMainBodyInfoInput type="text" placeholder="Email" />
        <LoginSignLink to="/loginOrRegister" onClick={() => setLoginOrSignup("signup")}>
          <LandingPageMainBodyInfoButton>Sign up - it’s free!</LandingPageMainBodyInfoButton>
        </LoginSignLink>
      </LandingPageMainBodyInfoForm>
      <LandingPageMainBodyInfoVideo>
        <LandingPageMainBodyInfoVideoText>Watch video</LandingPageMainBodyInfoVideoText>
        <LandingPageMainBodyInfoVideoIcon>
          <VideoIcon />
        </LandingPageMainBodyInfoVideoIcon>
      </LandingPageMainBodyInfoVideo>
    </LandingPageMainBodyInfoContainer>
  );
}
