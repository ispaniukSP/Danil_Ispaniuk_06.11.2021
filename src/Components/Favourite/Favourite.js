import React from 'react'
import { useHistory } from 'react-router';
import Header from '../Header/Header'
import * as Styled from './style'
import FavouriteItem from './FavouriteItem';
import ChangeUnitTemp from './../Common/ChangeUnitTemp';
import { useSelector } from 'react-redux';

export const Favourite = (props) => {
    const history = useHistory();
    const getTemp = useSelector(state => state.temp)
    const {getCelsius, getFahrenheit} = ChangeUnitTemp();
    
    const favCity = [];
    for (let i = 0; i<localStorage.length; i++) {
        if(!!localStorage.key(i).match('city-')){
            favCity[i] = JSON.parse(localStorage.getItem(localStorage.key(i)));
        }
    }

    const getTemperature = (temp) =>{
        return getTemp ? getFahrenheit(temp) : getCelsius(temp);
    }

    const onClick = (e) =>{
        const cityID = e.target.getAttribute('data-key');
        const cityName = e.target.getAttribute('data-city');
        localStorage.setItem('cityID', cityID) 
        localStorage.setItem('cityName', cityName) 
        cityID && history.push(`/`)
    }

    return (
        <Styled.Wrapper {...props.theme}>
            <Header {...props} />
            <Styled.Favourite onClick={(e) => onClick(e)}>
                {favCity ? (
                    favCity.map((city) => <FavouriteItem key={city.cityID} cityID={city.cityID} city={city.name} temp={getTemperature(city.temp)} />)
                ) : null}
                
            </Styled.Favourite>
        </Styled.Wrapper>
    )
}
