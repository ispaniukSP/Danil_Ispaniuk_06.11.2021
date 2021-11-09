import React, {useState,useEffect} from 'react'
import { Flex } from '../Flex/Flex'
import Search from '../Search/Search';
import MainContent from './MainContent';
import { getCityWeather } from '../../api';
import LoaderPlane from '../Common/Loader';


export default function Main(props) {
    const getLocalCityID = localStorage.getItem('cityID')
    const [city, setCity] = useState('Tel Aviv');
    const [cityID, setCityID] = useState(getLocalCityID || 215854)
    const [cityForecast, setCityForecast] = useState('');
    const [checkLoader, setCheckLoader] = useState(true)

    const {theme} = props;

    useEffect(async() => {
        const response = await getCityWeather(cityID)
        setCityForecast(response)
        setCheckLoader(false)
    }, [cityID])

    const getCityName = (name) => {
        localStorage.setItem('cityName', name)
        setCity(name)
    }

    return (
        <Flex width="100%" minHeight="80vh" direction="column" justify="space-around" align="center">
            <Search 
                theme={theme} 
                submitSearch={setCityID} 
                setCityName={getCityName} 
            />
           {checkLoader ? (<LoaderPlane />) : (<MainContent 
                theme={theme} 
                cityForecast={cityForecast} 
                city={localStorage.getItem('cityName') || city}  
            />)}
        </Flex>
    )
}
