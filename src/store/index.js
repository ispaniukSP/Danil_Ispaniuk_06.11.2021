import { combineReducers } from 'redux'
import toggleTemp from './isToggleTemp'
import getGeoPosition from './isCityID';

const allReducers = combineReducers({
    temp: toggleTemp,
    geo: getGeoPosition,
})

export default allReducers;