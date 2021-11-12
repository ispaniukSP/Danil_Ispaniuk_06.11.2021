import styled from "styled-components";

export const Navigation = styled.div`
    width: 200px;
    & .css-sghohy-MuiButtonBase-root-MuiButton-root{
        background-color: ${props => props.theme.buttonBackColor};
        color: ${props => props.theme.buttonColor};
        &:hover{
            background-color: ${props => props.theme.buttonHover};
            color: ${props => props.theme.buttonHoverColor};
        }
    }
`