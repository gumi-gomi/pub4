import React from 'react'
import styled from 'styled-components'
import Profession from "../img/profession.webp"

const Endingdiv = styled.div`
/* outline: 1px dotted red; */
width: 100%;
height: 500px;
display: flex;
justify-content: center;
align-items: center;
background-color: #000;
background-image: url(${Profession});
background-size: cover;
background-position: center;


.endinginner{
  outline: 1px solid rgba(0,0,0,0.05);
  border-radius: 15px;
  background-color: #fff;
  width: 900px;
  height: auto;
  text-align: center;
  padding: 40px 0px;
  box-shadow: 2px 2px 8px rgba(0,0,0,0.2);
  p{
    &:nth-child(1){
      font-size: 20px;
      font-weight: 700;
      span{
        font-size: 30px;
      }

    }
    &:nth-child(2){
      margin-top: 20px;
      span{
        font-weight: 700;
      }
    }
    &:nth-child(3){
      margin-top: 20px;
      line-height: 20px;
    }
    &:nth-child(4){
      margin-top: 20px;
    }
  }
}

`
const Ending = () => {
  return (
    <>
      <Endingdiv>
        <div className='endinginner'>
          {/* <p>NOTICE</p> */}
          <p>안녕하세요. <span>BRANDER</span>입니다.</p>
          <p>최고의 경험을 위해 최선을 다하고 있습니다.</p>
          <p>감사합니다.</p>
        </div>
      </Endingdiv>
    </>
  )
}

export default Ending
