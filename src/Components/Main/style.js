import styled from 'styled-components';

export const MainContent = styled.div`
    width: 850px;
    height: 75%;
    background-color: ${props => props.theme.contentBackground};
    border-radius: 10px;
    &:focus {
        outline: none;
    }
    transition: all .5s ease;
`