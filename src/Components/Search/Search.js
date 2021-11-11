import React, {useEffect, useRef, useState } from 'react'
import { BsSearch } from "react-icons/bs";
import { debounce } from 'lodash';
import * as Styled from './style';
import { useDispatch, useSelector } from 'react-redux';
import { getCityAutocomplete } from '../../store/actions/city/city.action';
import { useHistory } from 'react-router';

export default function Search(props) {
    const [valueChange, setValueChange] = useState('')
    const [activeDropDown, setActiveDropDown] = useState(false)
    const [locations, setLocations] = useState([])
    const cities = useSelector(state => state.city.cities)
    const dispatch = useDispatch()
    const history = useHistory()

    const onCitySelect = (item) => {
        history.push(`/city/${item.Key}`)
    }

    const getRegionID = (cityItem) => {
        setActiveDropDown(false)
        onCitySelect(cityItem)
        searchText.current.value='';
    }

    useEffect(async() => {
        if(!valueChange){
            setActiveDropDown(false)
            dispatch(getCityAutocomplete())
            return ;
        } else{
            dispatch(getCityAutocomplete(valueChange))
            setLocations(cities)
            locations && setActiveDropDown(true)
        }
    }, [valueChange, cities.length])

    const searchText = useRef()

    const onSubmit = (e) => {
        e.preventDefault();
        if(locations[0]?.Key){
            onCitySelect(locations[0])
        }
        setActiveDropDown(false)
        searchText.current.value='';
    }

    const handleChange =  debounce((text) => setValueChange(text), 350)

    const button = useRef();

    useEffect(() => window.addEventListener('click', el => {
        if(button.current && button.current.contains(el.target)){
            setActiveDropDown(!activeDropDown)
        }else{
            setActiveDropDown(false)
        }
    }),[])

    return (
            <Styled.SearchFrom {...props.theme} onSubmit={onSubmit} >
            <BsSearch size={20} color="#424242"/>
            <Styled.SearchInput 
                {...props.theme}
                placeholder="Search..." 
                onChange={e => handleChange(e.target.value)}  
                ref={searchText}       
            />
            {
                activeDropDown  && locations && 
                    <Styled.DropDown>
                        {locations.map((cityItem) => {
                            return(
                                <Styled.DropDownItem 
                                    key={cityItem?.Key} 
                                    onClick={() => getRegionID(cityItem)}
                                >
                                {cityItem.LocalizedName}, {cityItem.AdministrativeArea.LocalizedName}, {cityItem.Country.LocalizedName}
                                </Styled.DropDownItem>
                                )
                            }
                        )}
                    </Styled.DropDown>  
            }
        </Styled.SearchFrom>
    )
}
