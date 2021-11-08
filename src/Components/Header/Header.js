import React, {useState} from 'react'
import * as Styled from './style'
import {BsCloudSunFill} from 'react-icons/bs'
import {BsFillCloudMoonFill} from 'react-icons/bs'
import { Flex } from './../Flex/Flex';
import {Navigation} from '../Navigation/Navigation';


export default function Header(props) {
    const {theme,setTheme, toggleTemp, setToggleTemp} = props
    const changeTheme = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    }

    const changeUnitTemp = () => {
        toggleTemp ? setToggleTemp(false) : setToggleTemp(true);
    }

    const icon = theme === "light" ? <BsCloudSunFill size={30} /> : <BsFillCloudMoonFill size={30} />

    return (
        <Styled.Header {...props.theme}>
            <Flex width='95%' justify='space-between' align='center'>
                <Styled.HeaderTitle>
                    Weather App
                </Styled.HeaderTitle>

                <Flex align="center">
                    <Styled.Toggle onClick={changeUnitTemp}>
                        Temp
                    </Styled.Toggle>

                    <Styled.Toggle onClick={changeTheme}>
                        {icon}
                    </Styled.Toggle>
                    
                    <Navigation />
                </Flex>
            </Flex>
        </Styled.Header>
    )
}
