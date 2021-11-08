import React, {useState, useCallback, useEffect} from 'react'
import { Flex } from '../Flex/Flex'
import Search from '../Search/Search';
import MainContent from './MainContent';
import { getCityWeather } from '../../api';

export default function Main(props) {
    const [city, setCity] = useState('Tel Aviv');
    const [cityID, setCityID] = useState(215854)
    const [cityForecast, setCityForecast] = useState('');
    const {toggleTemp, theme} = props;

    useEffect(async() => {
        const response = await getCityWeather(cityID)
        setCityForecast(response)
    }, [cityID])

    const getCityName = (name) => {
        setCity(name)
    }

    return (
        <Flex width="100%" height="85%" direction="column" justify="space-around" align="center">
            <Search theme={theme} submitSearch={setCityID} setCityName={getCityName} />
            <MainContent toggleTemp={toggleTemp} theme={theme} cityForecast={cityForecast} city={city}  />
        </Flex>
    )
}
