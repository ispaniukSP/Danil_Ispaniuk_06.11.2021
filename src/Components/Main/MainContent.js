import React, {useState, useEffect} from 'react'
import * as Styled from './style'
import { Flex } from './../Flex/Flex';
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MainForecast } from './MainForecast';
import ChangeUnitTemp from '../Common/ChangeUnitTemp';
import {useSelector } from 'react-redux';

const MainContent = (props) => {
    const [activeHeart, setActiveHeart] = useState(false)
    const [forecast, setForecast] = useState([])
    const [cityName, setCityName] = useState()
    const {cityForecast, city} = props;
    const {getCelsius, getFahrenheit} = ChangeUnitTemp();
    const getTemp = useSelector(state => state.temp)

    useEffect(() => {
        cityForecast && setForecast(cityForecast.DailyForecasts)
    }, [cityForecast])

    useEffect(() =>{
        setCityName(city)
        !!localStorage.getItem(`city-${city}`) ? setActiveHeart(true) : setActiveHeart(false)
    }, [city])
    const addToFav = () => {
        const conditionAddToFav = () => {
            const cityObject = {
                name: city,
                temp: forecast[0].Temperature.Maximum.Value,
                cityID: localStorage.getItem("cityID"),
            }
            localStorage.setItem(`city-${city}`, JSON.stringify(cityObject) )
           return setActiveHeart(true)
        }

        const conditionRemoveFromFav = () => {
            localStorage.removeItem(`city-${city}`)
            return setActiveHeart(false)
         }

        activeHeart ? conditionRemoveFromFav () : conditionAddToFav()
        
    }

    const getUnitTemp = (temp) => {
        return getTemp ? getFahrenheit(temp) : getCelsius(temp);
    }

    return (
        <Styled.MainContent {...props.theme}>
            <Flex direction="column" align="center" justify="space-between" height="100%">
                <Flex 
                    width="100%" 
                    height="100px"
                    justify="space-between"
                >
                    <Flex>
                        <Styled.CityIcon>

                        </Styled.CityIcon>
                        <Flex 
                            direction="column"
                            padding="0 0 0 10px"
                        >
                            <Styled.CityName>{localStorage.getItem('cityName') || cityName}</Styled.CityName>
                            <Styled.CityTemperature>{forecast.length && getUnitTemp(forecast[0].Temperature.Maximum.Value)}</Styled.CityTemperature>
                        </Flex>
                    </Flex>

                    <Flex height="max-content">
                        <Styled.ToggleHeart>
                            {!activeHeart ? <AiOutlineHeart color="white" size={30} /> : <AiFillHeart color="#fff" size={30} />}
                        </Styled.ToggleHeart>

                        <Styled.ButtonFavorite onClick={addToFav}>
                            Add to Favorite
                        </Styled.ButtonFavorite>
                    </Flex>

                </Flex>

                <Flex margin="30px 0" width="100%" align="center" justify="center">
                    <Styled.WeatherForecast>
                        {cityForecast?.Headline?.Text}
                    </Styled.WeatherForecast>
                </Flex>

                <Flex width="100%" wrap="wrap">
                    <MainForecast forecast={forecast} />
                </Flex>
            </Flex>
           
        </Styled.MainContent>
    )
}

export default MainContent
