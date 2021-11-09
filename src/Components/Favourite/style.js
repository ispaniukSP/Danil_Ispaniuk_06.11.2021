import styled from 'styled-components'
export const Wrapper = styled.div`
    width:100%;
    height: 100vh;
    box-sizing: border-box;
    background-color: ${props => props.theme.pageBackground};
    &:focus {
        outline: none;
    }
    transition: all .5s ease;
`
export const Favourite = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 70vh;
`
export const FavouriteItem = styled.div`
    width: 220px;
    height: 320px;
    background-color: ${props => props.theme.favouriteBg};
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    margin-left: 50px;
    transition: all .3s linear;
    &:hover{
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
`
export const CityInfo = styled.span`
    user-select:none;
    width: 100%;
    font-size: 27px;
    color: white;
    margin: 20px 0px;
    text-align: center;
` 