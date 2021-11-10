export const changeTemp = (temp) => {
    return{
        type: "toggleTemp",
        payload: !temp
    }
}
export const changeGeoLocation = (cityID) => {
    return{
        type: "geoPos",
        payload: cityID
    }
}