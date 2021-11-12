import React from "react";
import Loader from "react-loader-spinner";

const AppLoader = () => {
  return (
    <Loader
      type="Puff"
      color="#b38867"
      height={100}
      width={100}
    />
  );
}

export default AppLoader;