import React from 'react'
import styled from 'styled-components'

interface IProps {
    title:string
    add : ()=>void
}
const Wrapper = styled.div`
    width: 90%;
    height: 50px;
    border-bottom: 1px solid gray;
    display: flex;
    justify-content: space-around;
    align-items: center;
    button {
        width: 30px;
        height: 30px;
        border: none;
        font-size: 20px;
        background-color: white;
    }
`


export default function Title(props:IProps) {

  return (
    <Wrapper>
        <h4>{props.title}</h4>
        <button onClick={props.add}>+</button>
    </Wrapper>
  )
}
