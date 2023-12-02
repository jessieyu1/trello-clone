import styled from "styled-components";

export const LandingPageMainBodyImgContainer = styled.div`
    width:50%;  
    /* position:relative; */
    padding-top: 10rem;
@media screen and (max-width: 1024px) {
    padding-top: 0;
    width:70%;
}
`;
export const LandingPageMainBodyImgImage = styled.img`
    width:100%;
    /* height:100%; */
    object-fit:cover;
    
`;