import axios from 'axios'
export const getSearchWeather = (city) => {
    return city && axios.get(`${process.env.REACT_APP_LOCATION_URL}/v1/cities/search`, {params: {apikey: process.env.REACT_APP_API_KEY, q: city}})
            .then(response => response.data)
}
export const getGeoPositionCity = (geoParams) => {
    return axios.get(`${process.env.REACT_APP_LOCATION_URL}/v1/cities/geoposition/search`, 
                    {params: {apikey: process.env.REACT_APP_API_KEY,    
                     q: `${geoParams.latitude},${geoParams.longitude}`,
                    }})
                    .then(response => response.data)
}
export const getCityWeather = (cityID) => {
    localStorage.setItem('cityID', cityID)
    return cityID && axios.get(`${process.env.REACT_APP_FORECAST_URL}/v1/daily/5day/${cityID}`,  {params: {apikey: process.env.REACT_APP_API_KEY}}).then(response => response.data)
}