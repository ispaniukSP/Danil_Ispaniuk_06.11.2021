import React, { useState } from 'react'
import Input from './../ui/Input/Input';
import { BsSearch } from "react-icons/bs";
import * as Styled from './style'

export default function Search(props) {
    const [location, setLocation] = useState('')
    const {submitSearch} = props

    const onSubmit = (e) => {
        e.preventDefault()
        if(!location) return ;
        submitSearch(location)
    }

    return (
        <Styled.SearchFrom onSubmit={onSubmit}>
            <BsSearch size={20} color='#474747' />
            <Styled.SearchInput 
                placeholder="Search..." 
                value={location}
                onChange={e => setLocation(e.target.value)} 
            />
        </Styled.SearchFrom>
    )
}
