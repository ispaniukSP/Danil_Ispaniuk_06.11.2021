import { instance } from "../../../api";
import { cityTypes } from "./city.type";

export const getCityAutocompleteRequest = () => ({
    type: cityTypes.GET_CITY_AUTOCOMPLETE_REQUEST,
})

export const getCityAutocompleteSuccess = (payload) => ({
    type: cityTypes.GET_CITY_AUTOCOMPLETE_SUCCESS,
    payload
})

export const getCityAutocompleteFailure = (err) => ({
    type: cityTypes.GET_CITY_AUTOCOMPLETE_FAILURE,
    payload: err,
})

export const getCityAutocomplete = (city) => async(dispatch) => {
    try{
        dispatch(getCityAutocompleteRequest());
        const autoCompleteCity =  await instance.get(`/locations/v1/cities/autocomplete`, {
            params: { apikey: process.env.REACT_APP_API_KEY, q: city, language: 'en-US' },
        })

        dispatch(getCityAutocompleteSuccess(autoCompleteCity.data))
       
    }catch(err){
        getCityAutocompleteFailure(err)
    }
}

export const getCityByIdRequest = () => ({
    type: cityTypes.GET_CITY_BY_ID_REQUEST,
})

export const getCityByIdSuccess = (payload) => ({
    type: cityTypes.GET_CITY_BY_ID_SUCCESS,
    payload
})

export const getCityByIdFailure = (err) => ({
    type: cityTypes.GET_CITY_BY_ID_FAILURE,
    payload: err,
})

export const getCityById = (cityId) => async (dispatch) => {
    try{
        dispatch(getCityByIdRequest());

        const getCityInfo =  await instance.get(`/locations/v1/${cityId}`, {
            params: { apikey: process.env.REACT_APP_API_KEY },
        })

        dispatch(getCityByIdSuccess(getCityInfo.data))
        
    }catch(err){
        getCityByIdFailure(err)
    }
}

export const userGeolocationRequest = () => ({
    type: cityTypes.GET_CITY_BY_GEOLOCATION_REQUEST
})

export const userGeolocationSuccess = (payload) => ({
    type: cityTypes.GET_CITY_BY_GEOLOCATION_SUCCESS,
    payload
})

export const userGeolocationFailure = (err) => ({
    type: cityTypes.GET_CITY_BY_GEOLOCATION_FAILURE,
    payload: err
})

export const getUserGeolocation = (geolocation) => async(dispatch) => {
    try{
        dispatch(userGeolocationRequest());

        const getGeoposition = await instance.get(`/locations/v1/cities/geoposition/search`, {
            params: {
              apikey: process.env.REACT_APP_API_KEY,
              q: `${geolocation.latitude},${geolocation.longitude}`,
            },
          })

        dispatch(userGeolocationSuccess(getGeoposition.data))

    }catch(err){
        dispatch(userGeolocationFailure())
    }

}

export const setSelectedCity = (city) => ({
    type: cityTypes.SET_SELECTED_CITY,
    payload: city
})