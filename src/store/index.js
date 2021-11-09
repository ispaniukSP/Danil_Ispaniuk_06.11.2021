import { combineReducers } from 'redux'
import toggleTemp from './isToggleTemp'

const allReducers = combineReducers({
    temp: toggleTemp,
})

export default allReducers;