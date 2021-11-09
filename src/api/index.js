import axios from 'axios'
// apikey=GoBHjAE9IIcsiGqolAOFgAaG70U81H0C&q=Kharkiv
export const getSearchWeather = (city) => {
    return city && axios.get(`${process.env.REACT_APP_LOCATION_URL}/v1/cities/search`, {params: {apikey: process.env.REACT_APP_API_KEY, q: city}})
            .then(response => response.data)

}
export const getCityWeather = (cityID) => {
    localStorage.setItem('cityID', cityID)
    return cityID && axios.get(`${process.env.REACT_APP_FORECAST_URL}/v1/daily/5day/${cityID}`,  {params: {apikey: process.env.REACT_APP_API_KEY}}).then(response => response.data)
}