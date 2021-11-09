import React from 'react'
import * as Styled from './style'
import {BsCloudSunFill} from 'react-icons/bs'
import {BsFillCloudMoonFill} from 'react-icons/bs'
import { FaThermometerHalf } from "react-icons/fa";
import { Flex } from './../Flex/Flex';
import {Navigation} from '../Navigation/Navigation';
import { useDispatch } from 'react-redux';
import { changeTemp } from './../../store/actions';



export default function Header(props) {
    const {theme, setTheme} = props
    const dispatch = useDispatch()

    const changeTheme = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    }

    const changeUnitTemp = () => {
        dispatch(changeTemp())
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
                        <FaThermometerHalf size={30} />
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
