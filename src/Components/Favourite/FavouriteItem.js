import React from 'react'
import { useHistory } from 'react-router';
import * as Styled from './style'

const FavouriteItem = ({city, temp, cityID}) => {
    const history = useHistory();

    const clickHandler = () => {
        history.push(`/city/${cityID}`)
    }

    return (
        <Styled.FavouriteItem onClick={clickHandler} data-city={city}>
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