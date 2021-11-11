import { instance } from "../../../api";
import { weatherTypes } from "./weather.type";

const getCityWeatherRequest = () => ({
  type: weatherTypes.GET_CITY_WEATHER_REQUEST,
});

const getCityWeatherSuccess = (payload) => ({
  type: weatherTypes.GET_CITY_WEATHER_SUCCESS,
  payload
});

const getCityWeatherFailure = (err) => ({
  type: weatherTypes.GET_CITY_WEATHER_FAILURE,
  payload: err,
});


export const getCityWeatherAction = (cityID) => async (dispatch) => {
  try {
    dispatch(getCityWeatherRequest());
    const currentDay = await instance.get(`/currentconditions/v1/${cityID}`, {
      params: { apikey: process.env.REACT_APP_API_KEY },
    });

    const forecastDays = await instance.get(
      `/forecasts/v1/daily/5day/${cityID}`,
      { params: { apikey: process.env.REACT_APP_API_KEY } }
    );
    dispatch(
      getCityWeatherSuccess({
        currentDay: currentDay.data[0],
        forecastDays: forecastDays.data.DailyForecasts,
      })
    );
  } catch (err) {
    dispatch(getCityWeatherFailure(err));
  }
};

export const setUnit = (temperature) => ({
  type: weatherTypes.SET_UNIT_TEMP,
  payload: temperature
})
