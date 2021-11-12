import React from "react";
import * as Styled from "./style";
import { Flex } from "./../Flex/Flex";
import {getCelsius, getFahrenheit} from '../../utils/weatherUnit'
import { useSelector } from "react-redux";

export const MainForecast = (props) => {
  const weather = useSelector(state => state.weather)
  const unit = useSelector(state => state.weather.unit)

  const getWeekDay = (day) => {
    return new Date(day.Date).toLocaleDateString("en-US", { weekday: "long" });
  };
  const getTemperature = (temp) => {
    return unit ? getCelsius(temp) : getFahrenheit(temp);
  };

  return (weather.forecast && weather.forecast.map((item) => (
      <Styled.Forecast key={item.EpochDate}>
        <Flex direction="column" align="center">
          <Styled.ForecastDay>{getWeekDay(item)}</Styled.ForecastDay>
          <Styled.ForecastTemperature>
            {getTemperature(item.Temperature.Maximum.Value)}
          </Styled.ForecastTemperature>
        </Flex>
      </Styled.Forecast>
    ))
  );
};
