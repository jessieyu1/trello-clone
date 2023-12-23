import styled from "styled-components";

export const DashboardPageNavigatorContainer = styled.nav`
  width: 100%;
  height: 48px;
  box-sizing: border-box;
  background-color: rgb(55, 47, 39);
  font-family: sans-serif;
  color: rgb(255, 255, 255);
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
`;

export const DashboardPageExpressIconContainer = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    cursor: pointer;
    border-radius: 5px;
    transition-duration: 85ms;
  }
`;
export const DashboardPageTabsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const DashboardPageLogoContainer = styled.div`
  padding: 0px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  display: block;
  position: relative;
  &:hover {
    cursor: pointer;
    transition-duration: 85ms;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 5px;
  }
`;
export const DashboardPageLogoImageStatic = styled.img`
  width: 75px;
  height: 32px;
  padding: 8px 0;
  box-sizing: border-box;
  display: block;
  /* &:hover {
        opacity: 0;} */
`;
export const DashboardPageLogoImage = styled.img`
  width: 75px;
  height: 32px;
  padding: 8px 0;
  box-sizing: border-box;
  display: none;
  &:hover {
    cursor: pointer;
    transition-duration: 85ms;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 5px;
    display: block;
    z-index: 3;
  }
`;
export const DashboardPageNavigatorTab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 8px;
  padding: 0 8px;
  &:hover {
    cursor: pointer;
    transition-duration: 85ms;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 5px;
  }
`;
export const DashboardPageNavigatorTabText = styled.div`
  font-size: 14px;
  font-stretch: 100%;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  margin-right: 2px;
  &::first-letter {
    text-transform: uppercase;
  }
`;
export const DashboardPageNavigatorTabIconContainer = styled.div`
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const DashboardPageNavigatorPlusIconContainer = styled.div`
  margin: 0 8px;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
`;

export const DashboardPageNavigatorUserContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const DashboardPageNavigatorSearchContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width:200px;
    height:32px;
    padding: 0 8px;
    margin-right: 8px;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.2);
`;
export const DashboardPageNavigatorSearchIconContainer = styled.div`
    width: 16px;
    height: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    `;
export const DashboardPageNavigatorSearchInput = styled.input`
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background-color: transparent;
    color: white;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    font-family: sans-serif;
    &::placeholder {
        color: rgba(255, 255, 255);
    }
    `;
export const DashboardPageNavigatorUserIconContainer = styled.div`
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        cursor: pointer;
        transition-duration: 85ms;
        background-color: rgba(255, 255, 255, 0.2);
        border-radius: 50%;
    }
    `;
export const DashboardPageNavigatorUserIcon = styled.div`
    width:24px;
    height:24px;
    background-color:blue;
    border-radius:50%;
    font-size: 10px;
    font-weight: 400;
    line-height: 20px;
    font-family: sans-serif;
    text-transform: uppercase; 
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    `;


