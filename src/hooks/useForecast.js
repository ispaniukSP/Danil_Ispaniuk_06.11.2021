import { useState } from "react";
import axios from 'axios';

const useForcast = () => {
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [forecast, setForcast] = useState(null);


  return{
    isError, 
    isLoading, 
    forecast,
  }
};
export default useForcast;
