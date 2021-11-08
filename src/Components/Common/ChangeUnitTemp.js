const ChangeUnitTemp = () => {
    const getCelsius = (temp) =>  {
        return `${parseInt((temp - 32)/1.8)} C°` 
    }

    const getFahrenheit  = (temp) =>  {
        return `${temp} F°` 
    }
    
    return{
        getCelsius,
        getFahrenheit,
    }
}
export default ChangeUnitTemp
