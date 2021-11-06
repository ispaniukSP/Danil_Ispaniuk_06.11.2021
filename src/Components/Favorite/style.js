import styled from 'styled-components'
export const Wrapper = styled.div`
    width:100%;
    height: 100vh;
    box-sizing: border-box;
    background-color: ${props => props.theme.pageBackground};
    &:focus {
        outline: none;
    }
    transition: all .5s ease;
`
