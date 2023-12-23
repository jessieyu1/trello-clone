import dashboardBackgroundImage from "../assets/dashboardBackgroundImage.jpeg";
import DashboardPageMainBody from "../components/DashboardPageMainBody/DashboardPageMainBody";
import DashboardPageNavigator from "../components/DashboardPageNavigator/DashboardPageNavigator";
import {
  DashboardPageContainer,
  DashboardPageBackgroundImage,
  DashboardPageContent,
} from "./DashboardPage.styles";
function DashboardPage() {
  return (
    <DashboardPageContainer>
      <DashboardPageBackgroundImage
        src={dashboardBackgroundImage}
        alt="dashboard background image"
      />
      <DashboardPageContent>
        <DashboardPageNavigator />
        <DashboardPageMainBody />
      </DashboardPageContent>
    </DashboardPageContainer>
  );
}

export default DashboardPage;
