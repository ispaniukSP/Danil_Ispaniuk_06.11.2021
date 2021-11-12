import styled from "styled-components"

export const Header = styled.header`
    width:100%;
    min-height: 100px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    background-color: ${props => props.theme.headerBackground};
    &:focus {
        outline: none;
    }
    transition: all .5s ease;
`

export const HeaderTitle = styled.h2`
    padding: 0;
    margin: 0;
    font-weight: 200;
    font-size: 30px;
    color: ${props => props.theme.headerColor}
`
export const Toggle = styled.button`
    cursor: pointer;
    height: 40px;
    width: 40px; 
    display: flex;
    justify-content: center;
    align-items: center;  
    border-radius: 50%;
    border: none;
    margin-right: 20px;
    background-color: ${props => props.theme.headerColor};
    color: ${props => props.theme.headerBackground};
    &:focus {
        outline: none;
    }
    transition: all .5s ease;
`;