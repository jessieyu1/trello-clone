import styled from "styled-components";
import Box from "@mui/material/Box";

export const DashboardPageContentContainer = styled.div`
  flex-grow: 1;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: start;
  transition: all 0.2s ease;
`;
export const DashboardPageContentColumn = styled.div`
  background-color: var(--tr-background-list, #ebecf0);
  border-radius: 12px;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px 0px,
    rgba(9, 30, 66, 0.31) 0px 0px 1px 0px;
  box-sizing: border-box;
  color: rgb(68, 84, 111);
  display: flex;
  flex-basis: 272px;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  font-family: -apple-system, "system-ui", "Segoe UI", Roboto, "Noto Sans",
    Ubuntu, "Droid Sans", "Helvetica Neue", sans-serif;
  font-size: 14px;
  font-weight: 400;
  justify-content: space-between;
  line-height: 20px;
  list-style: none;
  max-height: 100%;
  padding: 8px;
  position: relative;
  scroll-margin: 8px;
  text-align: left;
  user-select: none;
  vertical-align: top;
  width: 272px;
  margin: 16px 0 0 16px;
`;
export const DashboardPageContentAddColumn = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px 0px,
    rgba(9, 30, 66, 0.31) 0px 0px 1px 0px;
  box-sizing: border-box;
  color: white;
  padding: 8px;
  margin: 16px 0 0 16px;
  width: 272px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    cursor: pointer;
  }
`;

export const DashBoardPageContentAddTaskContainer = styled.div`
  height: 32px;
  line-height: 32px;
  padding-left: 8px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    cursor: pointer;
    border-radius: 12px;
  }
`;
export const DashboardPageContentColumnTitleContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  color: rgb(23, 43, 77);
`;
export const DashboardPageContentIconContainer = styled.div`
    width: 28px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 20px;
    opacity: 0;
    visibility: hidden;
    transition: all 0.2s ease;
    &:hover {
      opacity: 1;
      visibility: visible;
    }
`;

export const DashboardPageContentItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  background-color: #fff;
  border-radius: 12px;
  margin-bottom: 8px;
  position: relative;
  overflow: hidden;
&::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 8px;
  background-color:${props => props.topLineColor};
}
  &:hover {
    box-sizing: border-box;
    border:2px solid blue;
    cursor: pointer;
    border-radius: 12px;
    ${DashboardPageContentIconContainer} {
      opacity: 1;
      visibility: visible;
    }
  }
`;

export const DashboardPageContentItemText = styled.div`
  font-size: 14px;
  font-stretch: 100%;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  margin-right: 2px;
  word-wrap: break-word;
`;
export const DashboardPageContentTitleIconContainer = styled.div`
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    border-radius: 12px;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;