import React from 'react'
import styled from 'styled-components'

const Footerdiv = styled.div`
  width: 100%;
  height: 200px;
  background-color: #cdcdcd;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: #797979;

  p{
    text-transform: uppercase;
    line-height: 20px;
    /* outline: 1px dotted red; */
  }
`
const Footer = () => {
  return (
    <>
      <Footerdiv>
        <p>Web Agency Concepts Page</p>
        <p>sample 3</p>
      </Footerdiv>
    </>
  )
}

export default Footer
