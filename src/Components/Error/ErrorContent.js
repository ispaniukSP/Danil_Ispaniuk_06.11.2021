import React from 'react'
import { Flex } from './../Flex/Flex';
import * as Styled from './style'
export default function ErrorContent(props) {
    return (
        <Styled.ErrorContent {...props.theme}>
            <Flex>
                <Styled.ErrorText>
                    Sorry, but your trial version is over for today. But we'll be waiting for you tomorrow! 
                </Styled.ErrorText>
            </Flex>
        </Styled.ErrorContent>
    )
}
