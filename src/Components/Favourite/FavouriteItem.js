import React from 'react'
import * as Styled from './style'

const FavouriteItem = (props) => {
    const {city, temp} = props;

    return (
        <Styled.FavouriteItem>
            <Styled.CityInfo>{city} </Styled.CityInfo>
            <Styled.CityInfo>{temp}</Styled.CityInfo>
        </Styled.FavouriteItem>
    )
}

export default FavouriteItem