import { useState } from "react";
import axios from 'axios';

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
