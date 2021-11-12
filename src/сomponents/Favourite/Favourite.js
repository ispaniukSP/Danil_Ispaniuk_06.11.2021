import React, { useMemo } from 'react'
import Header from '../Header/Header'
import * as Styled from './style'
import FavouriteItem from './FavouriteItem';
import {getCelsius, getFahrenheit} from '../../utils/weatherUnit'
import { useSelector } from 'react-redux';
import ErrorContent from './../Error/ErrorContent';
import { Flex } from './../Flex/Flex';

export const Favourite = ({theme, setTheme}) => {
    const getTemp = useSelector(state => state.temp)
    const handleError = useSelector(state => state.weather.error)
    
    const favCities = useMemo(() => {
        const cities = localStorage.getItem('cities');
        return JSON.parse(cities) || []
    }, [])

    const getTemperature = (temp) =>{
        return getTemp ? getFahrenheit(temp) : getCelsius(temp);
    }

    return (
        <Styled.Wrapper>
            <Header theme={theme} setTheme={setTheme} />
            <Styled.Favourite>{ 
            !handleError ? ( favCities.length && favCities ? (
                    favCities.map((city) => <FavouriteItem key={city.cityId} cityID={city.cityId} city={city.name} temp={getTemperature(city.temp)} />)
                ) : (
                    <Flex width="100%" height="100%" align="center" justify="center">
                        <Styled.FavouriteEmpty>
                            Add your favourite city...
                        </Styled.FavouriteEmpty>
                    </Flex>
                ))
                : (<Flex width="100%" height="100%" align="center" justify="center">
                    <ErrorContent theme={theme} />
                </Flex>)
                }
            </Styled.Favourite>
        </Styled.Wrapper>
    )
}
