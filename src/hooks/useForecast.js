import { useState } from "react";

const useForcast = () => {
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [forecast, setForcast] = useState(null);

  const submitRequest = (value) => {
    console.log(value)
  }

  return{
    isError, 
    isLoading, 
    forecast,
    submitRequest,
  }
};
export default useForcast;