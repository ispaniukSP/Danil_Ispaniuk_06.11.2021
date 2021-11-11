import React, { useMemo } from 'react'
import Header from '../Header/Header'
import * as Styled from './style'
import FavouriteItem from './FavouriteItem';
import ChangeUnitTemp from './../Common/ChangeUnitTemp';
import { useSelector } from 'react-redux';
import ErrorContent from './../Error/ErrorContent';
import { Flex } from './../Flex/Flex';

export const Favourite = ({theme}) => {
    const getTemp = useSelector(state => state.temp)
    const {getCelsius, getFahrenheit} = ChangeUnitTemp();
    const handleError = useSelector(state => state.weather.error)
    
    const favCities = useMemo(() => {
        const cities = localStorage.getItem('cities');
        return JSON.parse(cities) || []
    }, [])

    const getTemperature = (temp) =>{
        return getTemp ? getFahrenheit(temp) : getCelsius(temp);
    }

    return (
        <Styled.Wrapper {...theme}>
            <Header {...theme} />
            <Styled.Favourite>{ 
            !handleError ? ( favCities.length && favCities ? (
                    favCities.map((city) => <FavouriteItem key={city.cityId} cityID={city.cityId} city={city.name} temp={getTemperature(city.temp)} />)
                ) : "Add your favourite cities...")
                : (<Flex width="100%" height="100%" align="center" justify="center">
                    <ErrorContent theme={theme} />
                </Flex>)
                }
            </Styled.Favourite>
        </Styled.Wrapper>
    )
}
