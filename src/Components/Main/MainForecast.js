import React from 'react'
import * as Styled from './style'
import { Flex } from './../Flex/Flex';

export const MainForecast = (props) => {
    const { forecast } = props;
    const getWeekDay = (day) => {
        return new Date(day.Date).toLocaleDateString('en-US', {weekday: 'long'})  
    } 
    const getTemperature = (day) =>{
        return `${day.Temperature.Maximum.Value} ${day.Temperature.Maximum.Unit}`
    }
    return forecast.length ? forecast.map((item, index) => ((
        <Styled.Forecast key={index}>
            <Flex direction="column" align="center">
                <Styled.ForecastDay>{getWeekDay(item)}</Styled.ForecastDay>
                <Styled.ForecastTemperature>{getTemperature(item)}</Styled.ForecastTemperature>
            </Flex>
        </Styled.Forecast>
    )) )  : null
}
