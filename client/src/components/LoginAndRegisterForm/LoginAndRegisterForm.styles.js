import styled from "styled-components";

export const LoginAndRegisterFormContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin:auto;
    width: 400px;
    /* height: 500px; */
    padding: 32px 40px;
    background: rgb(255, 255, 255);
    border-radius: 3px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px;
    box-sizing: border-box;
    color: rgb(94, 108, 132);
`;
export const LoginAndRegisterFormTitle = styled.div`
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    text-align: center;
    margin-bottom: 16px;
`
export const LoginAndRegisterFormTitleLogo = styled.span`
    height: 40px;
`
export const LoginAndRegisterFormTitleText = styled.div`
    h5{
        margin:0;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: 600;
        font-size: 20px;
        height: 56px;
        color: rgb(23, 43, 77);
        line-height: 80px;
    }
`
export const LoginAndRegisterFormTag = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
`
export const LoginAndRegisterFormInputContainer = styled.div`
    -webkit-box-align: center;
    align-items: center;
    background-color: var(--ds-background-input, #FAFBFC);
    
    color: var(--ds-text, #091E42);
    cursor: text;
    border-radius: 3px;
    border-width: 2px;
    border-style: solid;
    box-sizing: border-box;
    display: flex;
    flex: 1 1 100%;
    -webkit-box-pack: justify;
    justify-content: space-between;
    max-width: 100%;
    overflow: hidden;
    transition: background-color 0.2s ease-in-out 0s, border-color 0.2s ease-in-out 0s;
    overflow-wrap: break-word;
    vertical-align: top;
    pointer-events: auto;
    border: 0;
`
export const LoginAndRegisterFormInput = styled.input`
    background-color: transparent;
    border: 2px solid var(--ds-border-input, #DFE1E6);
    box-sizing: border-box;
    color: inherit;
    cursor: inherit;
    font-size: 14px;
    min-width: 0px;
    outline: none;
    width: 100%;
    padding:10px;
    &:focus {
        border: 2px solid rgb(0, 82, 204);
    }
`
export const LoginAndRegisterFormTerms = styled.div`
    margin-top: 8px;
    text-align: left;
    padding-left: 0px;
`
export const LoginAndRegisterFormTermsText = styled.p`
    font-size: 12px;
    line-height: 16px;
    color: rgb(94, 108, 132);
    margin: 0px;
`
export const LoginAndRegisterFormLink = styled.a`
    color: rgb(0, 82, 204);
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`
export const LoginAndRegisterFormButton = styled.button`
margin-top: 16px;
    -webkit-box-align: baseline;
    align-items: baseline;
    border-width: 0px;
    border-radius: var(--ds-border-radius, 3px);
    box-sizing: border-box;
    display: inline-flex;
    font-size: inherit;
    font-style: normal;
    font-family: inherit;
    font-weight: 500;
    max-width: 100%;
    position: relative;
    text-align: center;
    text-decoration: none;
    transition: background 0.1s ease-out 0s, box-shadow 0.15s cubic-bezier(0.47, 0.03, 0.49, 1.38) 0s;
    white-space: nowrap;
    background: var(--ds-background-brand-bold, #0052CC);
    cursor: pointer;
    height: 2.28571em;
    line-height: 2.28571em;
    padding: 0px 10px;
    vertical-align: middle;
    width: 100%;
    -webkit-box-pack: center;
    justify-content: center;
    color: var(--ds-text-inverse, #FFFFFF) !important;
`;
export const LoginAndRegisterFormSwitch = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 16px;
    margin-bottom: 16px;
    &:hover {
        cursor: pointer;
        /* text-decoration: underline; */
    }
`
export const LoginAndRegisterFormDivider = styled.div`
    height: 1px;
    width: 100%;
    background-color:rgb(107, 119, 140);
    margin-bottom: 16px;
`;
