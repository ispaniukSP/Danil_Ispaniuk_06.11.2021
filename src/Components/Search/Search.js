import React, {useEffect, useState } from 'react'
import { getSearchWeather } from '../../api/index';
import { BsSearch } from "react-icons/bs";
import { debounce } from 'lodash';
import * as Styled from './style';

export default function Search(props) {
    const [city, setCity] = useState('')
    const [activeDropDown, setActiveDropDown] = useState(false)
    const [locations, setLocations] = useState('')
    const {submitSearch, setCityName} = props

    const getRegionID = (city) => {
        setActiveDropDown(false)
        localStorage.setItem('cityID', city.Key)
        submitSearch(city?.Key)
        setCityName(city?.LocalizedName)
    }

    useEffect(async() => {
        if(!city){
            setActiveDropDown(false)
            return ;
        } else{
            const response = await getSearchWeather(city);
            response && setLocations(response)
            response && setActiveDropDown(true)
        }
    }, [city])

    const onSubmit = (e) => {
        e.preventDefault()
        const cityName = locations[0]?.LocalizedName;
        const getCityKey = locations[0]?.Key
        localStorage.setItem('cityID', getCityKey)
        locations.length && setCity(cityName)
        locations.length && submitSearch(getCityKey)
        locations.length && setCityName(cityName)
        setActiveDropDown(false)
    }

    const handleChange =  debounce((text) => setCity(text), 350)

    return (
        <Styled.SearchFrom {...props.theme} onSubmit={onSubmit}>
            <BsSearch size={20} color="#424242"/>
            <Styled.SearchInput 
                {...props.theme}
                placeholder="Search..." 
                onChange={e => handleChange(e.target.value)} 
            />
            {
                activeDropDown  && locations.length > 0 && 
                    <Styled.DropDown>
                        {locations.map((cityItem) => {
                            return(
                                <Styled.DropDownItem 
                                    key={cityItem?.Key} 
                                    onClick={() => getRegionID(cityItem)}
                                >
                                {cityItem.AdministrativeArea.LocalizedName}, {cityItem.Country.LocalizedName}
                                </Styled.DropDownItem>
                                )
                            }
                        )}
                    </Styled.DropDown>  
            }
        </Styled.SearchFrom>
    )
}
