import styled from "styled-components";

export const DashboardPageContainer = styled.div`
  height: 100vh;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
`;

export const DashboardPageBackgroundImage = styled.img`
  height: 100%;
  z-index: 1;
  overflow: hidden;
  min-width: 100%;
  position:relative;
`;

export const DashboardPageContent= styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2;
  overflow: hidden;
`;
