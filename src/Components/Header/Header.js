import React, { useState, useEffect } from 'react';
import { FaThermometerHalf } from "react-icons/fa";
import {BsFillCloudMoonFill, BsCloudSunFill} from 'react-icons/bs';
import { BiGlobe } from "react-icons/bi";
import { useDispatch } from 'react-redux';
import {Navigation} from '../Navigation/Navigation';
import { changeGeoLocation, changeTemp } from './../../store/actions';
import { Flex } from './../Flex/Flex';
import * as Styled from './style';



export default function Header(props) {
    const {theme, setTheme} = props;
    const dispatch = useDispatch()

    const findGeoPos = () => {
        const getPosition = (position) => {
            const paramArr = {}
            paramArr.latitude = position.coords.latitude
            paramArr.longitude = position.coords.longitude
            dispatch(changeGeoLocation(paramArr))
            
        }
        const error = () => {
            alert('Unable to retrieve your location')
        }
        navigator.geolocation.getCurrentPosition(getPosition, error)
    }

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
                    <Styled.Toggle onClick={findGeoPos}>
                        <BiGlobe size={30} />
                    </Styled.Toggle>

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
