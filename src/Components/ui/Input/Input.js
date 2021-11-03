import React from 'react'
import * as Styled from "./style"

export default function Input(props) {
    return (
        <Styled.InputField >
            <Styled.InputStyle placeholder={props.text} />
        </Styled.InputField>
    )
}
