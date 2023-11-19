import styled from "styled-components";

export const MainBodyRootContainer = styled.div`
  width:100%;
  flex:1;
  display:flex;
  justify-content: center;
  align-items: start;
  color:#fff;
  background: center bottom -0.5px / 100% 14% no-repeat scroll padding-box border-box, linear-gradient(60deg, rgb(82, 67, 170), rgb(237, 80, 180)) 0% 0% / auto repeat scroll padding-box border-box rgb(82, 67, 170);
`;
export const MainBodyContainer = styled.div`
  width:100%;
  max-width: 1320px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

@media screen and (max-width: 1024px) {
  flex-direction: column;
  justify-content: center;
}
`;