import React from 'react'
import Header from '../Header/Header'
import * as Styled from './style'

export const Favorite = (props) => {
    return (
        <Styled.Wrapper {...props.theme}>
            <Header {...props} />
            Favorite
        </Styled.Wrapper>
    )
}
