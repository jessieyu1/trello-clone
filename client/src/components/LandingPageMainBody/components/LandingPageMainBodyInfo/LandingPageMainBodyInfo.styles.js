import styled from "styled-components";

export const LandingPageMainBodyInfoContainer = styled.div`
  width:50%;
  display:flex;
  flex-direction: column;
  justify-content:center;
  /* align-items:center; */
  padding: 8rem 1rem 2rem 4rem;
  @media screen and (max-width: 1024px) {
    width:70%;
    padding-left: 1rem;
  }
`;

export const LandingPageMainBodyInfoTitle = styled.div`
  /* font-size: 48px; */
  /* font-weight:500;
  font-family: "Charlie Display", sans-serif; */
  @media screen and (max-width: 1024px){
    text-align: center;
  }
  
`;
export const LandingPageMainBodyInfoTitleH2 = styled.h2`
  font-size: 3rem;
  font-weight:500;
  font-family: "Charlie Display", sans-serif;
  margin:0 0 0.5rem 0;
  @media screen and (max-width: 1024px){
    font-size: 2.5rem;
  }
  @media screen and (max-width: 768px){
    font-size: 2rem;
  }
`;

export const LandingPageMainBodyInfoTitleP = styled.p`
  font-size: 1.2rem;
  font-weight:400;
  font-family: "Charlie Display", sans-serif;
  margin-bottom:1.5rem;
`;
export const LandingPageMainBodyInfoForm = styled.form`
  display:flex; 
  justify-content:flex-start; 
  align-items:center;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  @media screen and (max-width: 1024px){
    justify-content: center;
  }
  `;
export const LandingPageMainBodyInfoInput = styled.input`
  height: 3rem;
  width: 18rem;
  border-radius: 0.3rem;
  margin-right: 1rem;
  border: 1px solid rgb(223, 225, 230);
  margin-bottom: 1rem;
  padding-left: 1rem;
  box-sizing: border-box;
  font-size: 1.2rem;
  font-weight:400;
  font-family: "Charlie Display", sans-serif;
  &::placeholder {
    line-height: 3rem;
    color:rgba(0,0,0,0.5);
    font-size: 1.2rem;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const LandingPageMainBodyInfoButton = styled.button`
  height: 3rem;
  width:10rem;
  background-color: rgb(0, 101, 255);
  border: 1px solid rgb(0, 101, 255);
  font-size: 1rem;
  font-weight:400;
  font-family: "Charlie Display", sans-serif;
  color: #fff;
  /* padding: 0 1rem; */
  border-radius: 0.3rem;
  &:hover {
    background-color:rgb(7, 71, 166);
  }
  margin-bottom: 1rem;
  box-sizing: border-box;
    @media screen and (max-width: 768px) {
    width: 32rem
  }
`;
export const LandingPageMainBodyInfoVideo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
@media screen and (max-width: 1024px) {
  justify-content: center;
}
`;
export const LandingPageMainBodyInfoVideoText = styled.span`
  font-size: 1rem;
  font-weight: 400;
  font-family: "Charlie Display", sans-serif;
  text-decoration: underline;
  padding-right: 0.5rem;
`;
export const LandingPageMainBodyInfoVideoIcon = styled.div`
  display: flex;
  justify-content: center;
  ${LandingPageMainBodyInfoVideo}:hover & {
    transform: translateX(0.5rem);
    transition: transform 0.5s ease-in-out;
  }
`;
