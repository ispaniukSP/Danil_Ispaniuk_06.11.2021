import React, {useState, useCallback, useEffect} from 'react'
import { Flex } from '../Flex/Flex'
import Search from '../Search/Search';
import MainContent from './MainContent';
import { getCityWeather } from '../../api';

export default function Main(props) {
    const [city, setCity] = useState();
    const [cityID, setCityID] = useState(215854)
    const [cityForecast, setCityForecast] = useState('');

    useEffect(async() => {
        const response = await getCityWeather(cityID)
        setCityForecast(response)
    }, [cityID])

    const getCityName = (name) => {
        setCity(name)
    }

    return (
        <Flex width="100%" height="85%" direction="column" justify="space-around" align="center">
            <Search theme={props.theme} submitSearch={setCityID} setCityName={getCityName} />
            <MainContent theme={props.theme} cityForecast={cityForecast} city={city}  />
        </Flex>
    )
}
