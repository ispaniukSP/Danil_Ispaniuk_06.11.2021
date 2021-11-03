import React from 'react'
import { Flex } from '../Flex/Flex'
import ButtonUI from '../ui/Button/Button'
import * as Styled from './style'

export default function Navigation() {
    return (
        <Styled.Navigation>
            <Flex width='100%' justify="space-between">
                <ButtonUI title='Home' color="#F2AA4CFF" />
                <ButtonUI title='Favourite' />
            </Flex>
        </Styled.Navigation>
    )
}
