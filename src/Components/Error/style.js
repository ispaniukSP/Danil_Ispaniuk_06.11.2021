import styled from 'styled-components'

export const ErrorContent = styled.div`
${console.log(props => console.log(props))}
    max-width: 570px;
    margin: 0 20px;
    padding: 40px;
    border-radius: 20px;
    background-color: ${props => props.theme.errorBackground};
`
export const ErrorText = styled.span`
    font-size: 30px;
    color: white;
`