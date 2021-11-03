import React from 'react'
import { Flex } from '../Flex/Flex'
import * as Styled from './style'
import Input from './../ui/Input/Input';
import Search from './../ui/Search/Search';

export default function Main(props) {
    return (
        <Flex width="100%" height="85%" direction="column" justify="space-around" align="center">
            <Search />
            <Styled.MainContent {...props.theme}>

            </Styled.MainContent>
        </Flex>
    )
}
