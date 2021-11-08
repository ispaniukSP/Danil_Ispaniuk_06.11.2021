import React from 'react'
import * as Styled from './style'
import { Flex } from './../Flex/Flex';
import ChangeUnitTemp from './../Common/ChangeUnitTemp';

export const MainForecast = (props) => {
    const { forecast, toggleTemp } = props;
    const {getCelsius, getFahrenheit} = ChangeUnitTemp();

    const getWeekDay = (day) => {
        return new Date(day.Date).toLocaleDateString('en-US', {weekday: 'long'})  
    } 
    const getTemperature = (temp) =>{
        return toggleTemp ? getFahrenheit(temp) : getCelsius(temp);
    }
    return forecast.length ? forecast.map((item, index) => ((
        <Styled.Forecast key={index}>
            <Flex direction="column" align="center">
                <Styled.ForecastDay>{getWeekDay(item)}</Styled.ForecastDay>
                <Styled.ForecastTemperature>{getTemperature(item.Temperature.Maximum.Value)}</Styled.ForecastTemperature>
            </Flex>
        </Styled.Forecast>
    )) )  : null
}
// day.Temperature.Maximum.Value