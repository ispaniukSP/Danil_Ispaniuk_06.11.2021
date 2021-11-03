import styled from "styled-components";

export const SearchFrom = styled.form`
    width: 300px;
    border: 2px solid #be762a;
    border-radius: 10px;
    padding: 5px;
    display: flex;
`
export const SearchInput = styled.input`
    width: 70%;
    height: 95%;
    border: none;
    outline: none;
    border-radius: 10px;
    margin-left: 10px; 
    &:placeholder{
        color: #474747;
    }
`