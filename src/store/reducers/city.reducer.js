import { cityTypes } from "../actions/city/city.type";

const initialState = {
  selectedCity: null,
  cities: [],
  loading: false,
  error: null
};

export default (state = initialState, { type, payload, ...action }) => {
  switch (type) {
    case cityTypes.GET_CITY_AUTOCOMPLETE_REQUEST:
      return { ...state, error: null };
    
    case cityTypes.GET_CITY_AUTOCOMPLETE_SUCCESS:
      return { 
        ...state,
        cities: payload,
        loading: false,
        error: null
      };

    case cityTypes.GET_CITY_AUTOCOMPLETE_FAILURE:
      return { ...state, error: payload, loading: false};
    
    case cityTypes.GET_CITY_BY_ID_REQUEST:
      return {...state, error: null}
    
    case cityTypes.GET_CITY_BY_ID_SUCCESS:
      return {
        ...state,
        selectedCity : payload,
        error: null,
      } 
    case cityTypes.GET_CITY_BY_ID_FAILURE:
      return {...state, error: payload, loading: false}

    case cityTypes.GET_CITY_BY_GEOLOCATION_REQUEST:
      return {...state, error: null, loading: true}

    case cityTypes.GET_CITY_BY_GEOLOCATION_SUCCESS:
      return{
        ...state,
        selectedCity: payload,
        loading: false,
        error: null,
      }
    case cityTypes.GET_CITY_BY_GEOLOCATION_FAILURE:
      return {
        ...state,
        error: payload,
        loading: false,
      }

    default:
      return state;
  }
};
