import React from 'react'
import { Flex } from '../Flex/Flex'
import * as Styled from './style'
import Search from '../Search/Search';
import useForcast from '../../hooks/useForecast';

export default function Main(props) {
    const {submitRequest} = useForcast();

    const onSubmit = (value) => {
        submitRequest(value)
    }

    return (
        <Flex width="100%" height="85%" direction="column" justify="space-around" align="center">
            <Search submitSearch={onSubmit} />
            <Styled.MainContent {...props.theme}>

            </Styled.MainContent>
        </Flex>
    )
}
