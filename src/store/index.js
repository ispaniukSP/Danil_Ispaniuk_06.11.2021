import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import allReducers from "./reducers";
import { composeWithDevTools } from 'redux-devtools-extension';

const middlewares = [thunk]; 

const composeEnhancement = process.env.REACT_APP_ENV === 'production' ? compose : composeWithDevTools;

export const store = createStore(
  allReducers,
  composeEnhancement(
    applyMiddleware(...middlewares)
  )
)