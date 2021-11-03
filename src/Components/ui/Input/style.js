import styled from "styled-components";

export const InputField = styled.div`
  display: flex;
`

export const InputStyle = styled.input`
  width: 280px;
  height: 30px;
  border: none;
  border-bottom: 2px solid #be762a;
  outline: none;
  font-size: 15px;
  color: #474747;
  background-color: transparent;
  transition: border-bottom-color .3s linear;
  &:hover, &:focus{
      border-bottom-color: #ffd9c6;
  }
`