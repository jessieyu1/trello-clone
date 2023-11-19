import styled from "styled-components";

export const LogoSignContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  height: 100%;
  font-weight: 400;
  font-size: 1.2rem;
  font-family:"Charlie Text", sans-serif ;
`;
export const LoginContainer = styled.a`
  padding: 0.5rem 1.5rem;
  cursor: pointer;
`;
export const SignupContainer = styled.a`
  padding: 1.35rem;
  height: 100%;
  display: flex;
  align-items: center;
  cursor:pointer;
  color:#fff;
  background-color: rgb(0, 101, 255);
  &:hover {
    background-color: rgb(7, 71, 166);
  }
`;