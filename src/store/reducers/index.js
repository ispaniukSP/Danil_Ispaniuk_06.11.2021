import { combineReducers } from 'redux'

import weather from './weather.reducer';
import city from './city.reducer';

const allReducers = combineReducers({
    weather,
    city,
})

export default allReducers;