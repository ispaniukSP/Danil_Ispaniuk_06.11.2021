import React from 'react'
import Header from '../Header/Header'
import * as Styled from './style'
import FavouriteItem from './FavouriteItem';
import ChangeUnitTemp from './../Common/ChangeUnitTemp';

export const Favourite = (props) => {
    const {toggleTemp} = props
    const {getCelsius, getFahrenheit} = ChangeUnitTemp();
    
    const favCity = [];
    for (let i = 0; i<localStorage.length; i++) {
        favCity[i] = JSON.parse(localStorage.getItem(localStorage.key(i)));
    }

    const getTemperature = (temp) =>{
        return toggleTemp ? getFahrenheit(temp) : getCelsius(temp);
    }

    return (
        <Styled.Wrapper {...props.theme}>
            <Header {...props} />
            <Styled.Favourite>
                {favCity ? (
                    favCity.map((city, index) => <FavouriteItem key={index} city={city.name} temp={getTemperature(city.temp)} />)
                ) : null}
                
            </Styled.Favourite>
        </Styled.Wrapper>
    )
}
