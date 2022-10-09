import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 80%;
    height: 100px;
    border-radius: 10px;
    text-align: center;
    line-height: 100px;
    background-color: #bae7ff;
    color: white;
    margin: 0 auto;
`
export default function Header() {
  return (
    <Wrapper>我的看板</Wrapper>
  )
}
