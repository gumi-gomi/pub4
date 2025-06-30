import React from 'react'
import styled from 'styled-components'

const Fixedbox = styled.div`
  width: 100%;
  height: 6vh;
  background-color: royalblue;
  text-align: center;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFF;
  font-size: 1vw;
  font-weight: 700;
  gap: 4vw;
  z-index: 99;
  p{
    transition: 0.2s;
    flex: 1;
    &:nth-child(3){
      cursor: pointer;
      &:hover{

        font-size: 1.4vw;
      }
    }
  }
`
const Fixed = () => {

  const Scrolltop = ()=>{
    window.scrollTo({
      top: 0,
      behavior:'smooth'
    })
  }

  return (
    <>
      <Fixedbox>
         <p>TEL _ 011-1111-1111</p>
         <p>EMAIL _ BRNADER@GGMAIL.NET</p>
         <p onClick={Scrolltop}>GO TO TOP <span><i class="fa-solid fa-arrow-up"></i></span></p>
      </Fixedbox>
    </>
  )
}

export default Fixed
