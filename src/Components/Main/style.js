import styled from 'styled-components';

export const MainContent = styled.div`
    height: 75%;
    background-color: ${props => props.theme.contentBackground};
    border-radius: 10px;
    &:focus {
        outline: none;
    }
    padding: 30px;
    transition: all .5s ease;
`
export const CityIcon = styled.div`
    width: 80px;
    height: 80px;
    background: #ccc;
    border-radius: 5px;
`
export const CityName = styled.p`
    font-size: 20px;
    color: white;
    margin: 0;
    margin-bottom: 10px;
` 
export const CityTemperature = styled.p`
    font-size: 20px;
    color: white;
    margin:0;
    padding:0;
`
export const ToggleHeart = styled.button`
    border: none;
    outline: none;
    background: transparent;
    transition: all .5s linear;
    cursor: pointer;
    height: 40px;
    width: 40px;   
    border-radius: 50%;
`
export const ButtonFavorite = styled.button`
    border: 1px solid #474747;
    ouline none;
    background-color: #ccc;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 10px;
`
export const WeatherForecast = styled.p`
    font-size: 30px;
`
export const Forecast = styled.div`
    width: 150px;
    height: 200px;
    background: #ccccccd7;
    margin-bottom: 20px;
    border-radius: 10px;
    &:not(:last-child){
        margin-right: 20px;
    }
`
export const ForecastDay = styled.p`
    font-size: 20px;
    margin: 10px 0;
`
export const ForecastTemperature = styled.p`
    font-size: 20px;
    margin: 10px 0;
`