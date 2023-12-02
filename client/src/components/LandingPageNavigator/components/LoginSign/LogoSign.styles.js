import styled from "styled-components";
import {Link} from "react-router-dom";

export const LogoSignContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  height: 100%;
  font-weight: 400;
  font-size: 1.2rem;
  font-family:"Charlie Text", sans-serif ;
`;
export const LoginSignLink = styled(Link)`
  text-decoration: none;
`
export const LoginContainer = styled.div`
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  color: rgb(23, 43, 77);
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
export const SignupContainer = styled.div`
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
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const ResponsiveIcon = styled.div`
  display: none;
  padding-right: 1.35rem;
  cursor: pointer;
  @media (max-width: 1024px) {
    display: block;
  }
`;