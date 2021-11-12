import styled from "styled-components";

export const SearchFrom = styled.form`
    width: 300px;
    border: 2px solid ${props => props.theme.searchBorder};
    border-radius: 10px;
    padding: 5px;
    display: flex;
    margin: 30px 0 30px;
    position relative;
`
export const SearchInput = styled.input`
    width: 100%;
    height: 95%;
    border: none;
    outline: none;
    background: transparent;
    border-radius: 10px;
    margin-left: 10px; 
    color:${props => props.theme.searchColor};
    &:placeholder{
        background: ${props => props.theme.searchColor};
    }
`
export  const DropDown = styled.div`
cursor: pointer;
    position: absolute;
    top: 30px;
    width: 90%;
    max-height: 200px;
    color: white;
    padding: 5px;
    overflow-y: auto;
    background-color: #474747;
    border-radius: 5px;
`

export const DropDownItem = styled.p`
    max-width: calc(100% - 10px);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; 
    height: 40px;
    padding: 0;
    padding-left: 10px;
    margin: 0;
    display: flex;
    align-items: center;
    transition: all .3s linear;
    border-radius: 10px;
    &:hover{
        background-color: #cccccc82;
        border-radius: 10px;
    }
`