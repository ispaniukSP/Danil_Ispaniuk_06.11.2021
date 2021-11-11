import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import ChangeUnitTemp from "../Common/ChangeUnitTemp";
import { MainForecast } from "./MainForecast";
import Switch from "@mui/material/Switch";
import { Flex } from "./../Flex/Flex";
import * as Styled from "./style";
import { setUnit } from "../../store/actions/weather/weather.action";
import { useHistory } from "react-router";

const MainContent = (props) => {
  const [activeHeart, setActiveHeart] = useState(false);
  const { getCelsius, getFahrenheit } = ChangeUnitTemp();

  const weather = useSelector((state) => state.weather);
  const unit = useSelector((state) => state.weather.unit);
  const currentCity = useSelector((state) => state.city.selectedCity);

  const dispatch = useDispatch();
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const history = useHistory();

  useEffect(() => {
    if (currentCity?.Key) {
      let cities = JSON.parse(localStorage.getItem("cities")) || [];
      const isCityExist = cities.find((el) => el.cityId === currentCity.Key);
      setActiveHeart(!!isCityExist);
      history.push(`/city/${currentCity?.Key}`);
    }
  }, [currentCity]);

  const addToFav = () => {
    let cities = JSON.parse(localStorage.getItem("cities")) || [];
    const isCityExist = cities.find((el) => el.cityId === currentCity.Key);
    if (isCityExist) {
      cities = cities.filter((el) => el.cityId !== currentCity.Key);
    } else {
      cities = [
        ...cities,
        {
          name: currentCity.LocalizedName,
          cityId: currentCity.Key,
          temp: weather.current?.Temperature.Imperial.Value,
        },
      ];
    }
    localStorage.setItem("cities", JSON.stringify(cities));
    setActiveHeart(!isCityExist);
  };

  const controlUnit = () => {
    dispatch(setUnit(!unit));
  };

  const getUnitTemp = (temp) => {
    return unit ? getCelsius(temp) : getFahrenheit(temp);
  };

  return (
    <Styled.MainContent {...props.theme}>
      <Flex
        direction="column"
        align="center"
        justify="space-between"
        height="100%"
      >
        <Flex
          width="100%"
          minHeight="100px"
          justify="space-between"
          wrap="wrap"
        >
          <Flex>
            <Styled.CityIcon />
            <Flex direction="column" padding="0 0 0 10px">
              <Styled.CityName>{currentCity?.LocalizedName}</Styled.CityName>
              <Styled.CityTemperature>
                {weather.current &&
                  getUnitTemp(weather.current?.Temperature.Imperial.Value)}
              </Styled.CityTemperature>
            </Flex>
          </Flex>

          <Flex height="max-content" margin="15px 0 0 0">
            <Styled.ChangeUnit>
              <Flex align="center" margin="0 20px 0 0">
                C° <Switch {...label} onClick={() => controlUnit()} /> F°
              </Flex>
            </Styled.ChangeUnit>

            <Styled.ToggleHeart onClick={() => addToFav()}>
              {activeHeart ? (
                <AiFillHeart color="#fff" size={30} />
              ) : (
                <AiOutlineHeart color="white" size={30} />
              )}
            </Styled.ToggleHeart>
          </Flex>
        </Flex>

        <Flex maxWidth="800px" align="center" justify="center">
          <Styled.WeatherForecast>
            {weather.current?.WeatherText}
          </Styled.WeatherForecast>
        </Flex>

        <Flex width="100%" wrap="wrap" justify="center">
          <MainForecast />
        </Flex>
      </Flex>
    </Styled.MainContent>
  );
};

export default MainContent;
