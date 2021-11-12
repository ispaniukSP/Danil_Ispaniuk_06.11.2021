import React, { useMemo } from "react";
import { BsFillCloudMoonFill, BsCloudSunFill } from "react-icons/bs";
import { BiGlobe } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { Navigation } from "../Navigation/Navigation";
import { getUserGeolocation } from "../../store/actions/city/city.action";
import { Flex } from "./../Flex/Flex";
import * as Styled from "./style";

export default function Header({ theme, setTheme }) {
  const dispatch = useDispatch();

  const getPosition = (position) => {
    dispatch(
      getUserGeolocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      })
    );
  };

  const findGeoPos = () => {
    navigator.geolocation.getCurrentPosition(getPosition, () => {
      alert("Unable to retrieve your location");
    });
  };

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const icon = useMemo(
    () =>
      theme === "light" ? (
        <BsCloudSunFill size={30} />
      ) : (
        <BsFillCloudMoonFill size={30} />
      ),
    [theme]
  );

  return (
    <Styled.Header>
      <Flex width="95%" justify="space-between" align="center" wrap="wrap">
        <Styled.HeaderTitle>Weather App</Styled.HeaderTitle>

        <Flex
          align="center"
          justify="space-around"
          wrap="wrap-reverse"
          margin="20px 0"
        >
          <Styled.Toggle onClick={findGeoPos}>
            <BiGlobe size={30} />
          </Styled.Toggle>

          <Styled.Toggle onClick={changeTheme}>{icon}</Styled.Toggle>

          <Navigation />
        </Flex>
      </Flex>
    </Styled.Header>
  );
}
