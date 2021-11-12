import React from "react";
import { useHistory } from "react-router";
import * as Styled from "./style";

const FavouriteItem = ({ city, temp, cityID }) => {
  const history = useHistory();

  const clickHandler = () => {
    history.push(`/city/${cityID}`);
  };

  return (
    <Styled.FavouriteItem onClick={clickHandler}>
      <Styled.CityInfo>ID: {cityID}</Styled.CityInfo>

      <Styled.CityInfo>City: {city}</Styled.CityInfo>

      <Styled.CityInfoWeather>Weather: {temp}</Styled.CityInfoWeather>
    </Styled.FavouriteItem>
  );
};

export default FavouriteItem;
