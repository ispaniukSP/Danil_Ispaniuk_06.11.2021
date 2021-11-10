const getGeoPosition = (state=false, action) =>{
    switch(action.type) {
        case "geoPos":
            return action
        default:
            return state
    }
}

export default getGeoPosition