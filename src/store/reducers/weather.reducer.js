import { weatherTypes } from "../actions/weather/weather.type";

const initialState = {
  current: null,
  forecast: null,
  unit: true,
  loading: false, 
  error: null,
};

export default (state = initialState, { type, payload, ...action }) => {
  switch (type) {
    case weatherTypes.GET_CITY_WEATHER_REQUEST:
      return { ...state, error: null, loading: true };

    case weatherTypes.GET_CITY_WEATHER_SUCCESS:{
      return {
        ...state,
        error: null,
        loading: false,
        forecast: payload.forecastDays,
        current: payload.currentDay,
      };}

    case weatherTypes.GET_CITY_WEATHER_FAILURE:
      return { ...state, error: payload, loading: false };

    case weatherTypes.SET_UNIT_TEMP:
      return {...state, unit: payload};

    default:
      return state;
  }
};
