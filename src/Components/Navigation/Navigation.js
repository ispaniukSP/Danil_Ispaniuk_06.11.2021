import React from 'react'
import { Link } from 'react-router-dom'
import { Flex } from '../Flex/Flex'
import ButtonUI from '../ui/Button/Button'
import * as Styled from './style'

export const Navigation = () => {
    return (
        <Styled.Navigation>
            <Flex width='100%' justify="space-between">
                <Link to="/">
                    <ButtonUI color="error" title='Home' />
                </Link>
                <Link to="/favourite">
                    <ButtonUI title='Favourite' />
                </Link>
            </Flex>
        </Styled.Navigation>
    )
}
