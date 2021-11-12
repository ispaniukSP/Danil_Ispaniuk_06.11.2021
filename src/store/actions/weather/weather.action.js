import { instance } from "../../../api";
import { weatherTypes } from "./weather.type";

const getCityWeatherRequest = () => ({
  type: weatherTypes.GET_CITY_WEATHER_REQUEST,
});

const getCityWeatherSuccess = (payload) => ({
  type: weatherTypes.GET_CITY_WEATHER_SUCCESS,
  payload,
});

const getCityWeatherFailure = (err) => ({
  type: weatherTypes.GET_CITY_WEATHER_FAILURE,
  payload: err,
});

export const getCityWeatherAction = (cityID, errorCallback) => async (dispatch) => {
  try {
    dispatch(getCityWeatherRequest());
    const currentDay = await instance.get(`/currentconditions/v1/${cityID}`);

    const forecastDays = await instance.get(
      `/forecasts/v1/daily/5day/${cityID}`
    );
    dispatch(
      getCityWeatherSuccess({
        currentDay: currentDay.data[0],
        forecastDays: forecastDays.data.DailyForecasts,
      })
    );
  } catch (err) {
    errorCallback(err)
    dispatch(getCityWeatherFailure(err));
  }
};

export const setUnit = (temperature) => ({
  type: weatherTypes.SET_UNIT_TEMP,
  payload: temperature,
});
