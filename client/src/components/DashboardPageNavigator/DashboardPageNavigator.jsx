import {
  DashboardPageNavigatorContainer,
  DashboardPageTabsContainer,
  DashboardPageExpressIconContainer,
  DashboardPageLogoContainer,
  DashboardPageLogoImageStatic,
  DashboardPageLogoImage,
  DashboardPageNavigatorTab,
  DashboardPageNavigatorTabText,
  DashboardPageNavigatorTabIconContainer,
  DashboardPageNavigatorPlusIconContainer,
  DashboardPageNavigatorSearchContainer,
  DashboardPageNavigatorSearchIconContainer,
  DashboardPageNavigatorSearchInput,
  DashboardPageNavigatorUserIconContainer,
  DashboardPageNavigatorUserIcon,
  DashboardPageNavigatorUserContainer,
} from "./DashboardPageNavigator.styles";
import {
  ExpressIcon,
  DownArrowIcon,
  PlusIcon,
  SearchIcon,
} from "./DashboardPageNavigatorIcon";
import dashboardLogo from "../../assets/dashboardLogo.gif";
import dashboardLogoStatic from "../../assets/dashboardLogoStatic.gif";

function DashboardPageNavigator() {
  return (
    <DashboardPageNavigatorContainer>
      <DashboardPageTabsContainer>
        <DashboardPageExpressIconContainer>
          <ExpressIcon />
        </DashboardPageExpressIconContainer>
        <DashboardPageLogoContainer>
          <DashboardPageLogoImageStatic
            src={dashboardLogoStatic}
            alt="dashboard static logo"
          />
          <DashboardPageLogoImage src={dashboardLogo} alt="dashboard logo" />
        </DashboardPageLogoContainer>
        <DashboardPageNavigatorTab>
          <DashboardPageNavigatorTabText>
            workspaces
          </DashboardPageNavigatorTabText>
          <DashboardPageNavigatorTabIconContainer>
            <DownArrowIcon />
          </DashboardPageNavigatorTabIconContainer>
        </DashboardPageNavigatorTab>
        <DashboardPageNavigatorPlusIconContainer>
          <PlusIcon />
        </DashboardPageNavigatorPlusIconContainer>
      </DashboardPageTabsContainer>
      <DashboardPageNavigatorUserContainer>
        <DashboardPageNavigatorSearchContainer>
          <DashboardPageNavigatorSearchIconContainer>
            <SearchIcon />
          </DashboardPageNavigatorSearchIconContainer>
          <DashboardPageNavigatorSearchInput placeholder="Search"/>
        </DashboardPageNavigatorSearchContainer>
        <DashboardPageNavigatorUserIconContainer>
          <DashboardPageNavigatorUserIcon>oz</DashboardPageNavigatorUserIcon>
        </DashboardPageNavigatorUserIconContainer>
      </DashboardPageNavigatorUserContainer>
    </DashboardPageNavigatorContainer>
  );
}

export default DashboardPageNavigator;
