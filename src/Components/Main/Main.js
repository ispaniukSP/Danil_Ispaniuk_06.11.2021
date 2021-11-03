import React from 'react'
import { Flex } from '../Flex/Flex'
import * as Styled from './style'

export default function Main(props) {
    return (
        <Flex width="100%" height="85%" direction="column" justify="space-around" align="center">
            <Styled.MainContent {...props.theme}>

            </Styled.MainContent>
        </Flex>
    )
}
