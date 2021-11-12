import React, {useEffect} from 'react'
import { Flex } from '../Flex/Flex'
import Search from '../Search/Search';
import MainContent from './MainContent';
import AppLoader from "../Loader/Loader";
import { useSelector, useDispatch } from 'react-redux';
import { useRouteMatch, useHistory } from 'react-router';
import { getCityWeatherAction } from '../../store/actions/weather/weather.action';
import { getCityById } from '../../store/actions/city/city.action';
import ErrorContent from './../Error/ErrorContent';


export default function Main({ theme }) {
    const history = useHistory()
    const dispatch = useDispatch()
    const { params } = useRouteMatch()
    const weatherLoader = useSelector(state => state.weather.loading)
    const cityLoader = useSelector(state => state.city.loading)
    const handleError = useSelector(state => state.weather.error)

    useEffect(() => {
        if(!params.cityID){
            history.push(`/city/215854`)
            dispatch(getCityById('215854'))
        }else{
            dispatch(getCityById(params.cityID))
            dispatch(getCityWeatherAction(params.cityID, (error) => {
                if(error?.response.status === 400){
                    history.push(`/city/215854`)
                }
            }))
        }
    }, [params.cityID])

    return (
        <Flex width="100%" minHeight="80vh" direction="column" justify="space-around" align="center">
            {!handleError ?<Search 
                theme={theme} 
            /> : null}
           {!handleError ? (weatherLoader || cityLoader ? (<AppLoader />) : (<MainContent 
                theme={theme} 
            />)) : <ErrorContent theme={theme} />}
        </Flex>
    )
}
