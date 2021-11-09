import React from 'react'
import * as Styled from './style'

const FavouriteItem = (props) => {
    const {city, temp, cityID} = props;

    return (
        <Styled.FavouriteItem data-key={cityID} data-city={city}>
            <Styled.CityInfo> 
                    {city}
            </Styled.CityInfo>
            
            <Styled.CityInfo> 
                {temp}
            </Styled.CityInfo>
        </Styled.FavouriteItem>
    )
}

export default FavouriteItem