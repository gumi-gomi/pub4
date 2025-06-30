import React from 'react'
import styled from 'styled-components'
import Blackbg from "../img/blackbg.webp"

const Bodydiv = styled.div`
position: relative;
  /* outline: 1px dotted red; */
  width: 100%;
  height: 400px;
  margin: 0 auto;
  background-attachment: fixed;
  background-image: url(${Blackbg});
  background-position: center;
  background-size: cover;
  text-align: center;
  padding-top: 150px;
  box-sizing: border-box;
  color: #fff;
  /* font-size: 50px; */
  font-weight: 400;


 
  &::before {
    content: 'READING';
    position: absolute;
    width: 100%;
    left: 50%; transform: translateX(-50%);
    top:5%;
    height: 100%;
    color: #000;
    opacity: 0.3;
    font-size: 300px;
    z-index: 0;
  }
  p{
    position: relative;
    font-size: 50px;
    z-index: 4;
    line-height: 0px;
    text-shadow: 3px 3px 8px rgba(0,0,0,0.5);
    &:nth-child(1){
      margin-bottom: 50px;
    }
    &:nth-child(2){}
    span{
      line-height: 10px;
      letter-spacing: 4px;
      font-size: 15px;
      font-weight: 300;
    }
  }
` 

const Body = () => {
  return (
    <>
      <Bodydiv>
        <p>고객을 리딩하다</p>
        <p><span>분석하고 조율하고 만듭니다.</span><br/><span>최고의 브랜드를 위해 최고의 전문가들이 대기중입니다.</span></p>
      </Bodydiv>
    </>
  )
}

export default Body
