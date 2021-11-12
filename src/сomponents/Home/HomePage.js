import React from 'react'
import Header from '../Header/Header'
import * as Styled from './style'
import Main from './../Main/Main';


export default function HomePage(props) {
  return (
      <Styled.Wrapper>
          <Header {...props}  />
          <Main {...props} />
      </Styled.Wrapper>
    )
}
