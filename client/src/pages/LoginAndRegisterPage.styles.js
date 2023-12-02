import styled from "styled-components"; 

export const LoginAndRegisterPageContainer = styled.div`
  height: 100vh;
  margin: 0;
  padding: 0;
  position: relative;
  display: flex;
  justify-content: center;
`

export const LoginAndRegisterPageBackGroundImage = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    @media screen and (max-width: 768px) {
      display: none;
    }
`