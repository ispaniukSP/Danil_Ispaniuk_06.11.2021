import React, {useState, useEffect} from 'react'
import * as Styled from './style'
import { Flex } from './../Flex/Flex';
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MainForecast } from './MainForecast';

const MainContent = (props) => {
    const [activeHeart, setActiveHeart] = useState(false)
    const [forecast, setForecast] = useState([])
    const {cityForecast, city} = props;

    useEffect(async () => {
        cityForecast && setForecast(cityForecast.DailyForecasts)
    }, [cityForecast])
    
    const addToFav = () => {
        !activeHeart ? setActiveHeart(true) : setActiveHeart(false) 
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
                            <Styled.CityName>{city || "Tel Aviv"}</Styled.CityName>
                            <Styled.CityTemperature>{forecast.length && forecast[0].Temperature.Maximum.Value}</Styled.CityTemperature>
                        </Flex>
                    </Flex>

                    <Flex height="max-content">
                        <Styled.ToggleHeart>
                            {!activeHeart ? <AiOutlineHeart size={30} /> : <AiFillHeart size={30} />}
                        </Styled.ToggleHeart>

                        <Styled.ButtonFavorite onClick={addToFav}>
                            Add to Favorite
                        </Styled.ButtonFavorite>
                    </Flex>

                </Flex>

                <Flex width="100%" align="center" justify="center">
                    <Styled.WeatherForecast>
                        {cityForecast?.Headline.Text}
                    </Styled.WeatherForecast>
                </Flex>

                <Flex width="100%">
                    <MainForecast forecast={forecast} />
                </Flex>
            </Flex>
           
        </Styled.MainContent>
    )
}

export default MainContent
