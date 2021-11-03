import React from 'react'
import * as Styled from './style'
import {BsCloudSunFill} from 'react-icons/bs'
import {BsFillCloudMoonFill} from 'react-icons/bs'
import { Flex } from './../Flex/Flex';
import Navigation from '../Navigation/Navigation';


export default function Header(props) {

    const changeTheme = () => {
        props.theme === "light" ? props.setTheme("dark") : props.setTheme("light");
    }

    const icon = props.theme === "light" ? <BsCloudSunFill size={30} /> : <BsFillCloudMoonFill size={30} />

    return (
        <Styled.Header {...props.theme}>
            <Flex width='95%' justify='space-between' align='center'>
                <Styled.HeaderTitle>
                    Weather App
                </Styled.HeaderTitle>

                <Flex align="center">
                    <Styled.Toggle onClick={changeTheme}>
                        {icon}
                    </Styled.Toggle>
                    
                    <Navigation />
                </Flex>
            </Flex>
        </Styled.Header>
    )
}
