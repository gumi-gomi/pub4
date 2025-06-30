import React, { useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import Faceimg from '../img/face.webp'
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`


const Contactdiv = styled.div`
  /* outline: 1px dotted red; */
  width: 100%;
  height: auto;
  margin-top: 100px;

  .innertop{
    /* outline: 1px dotted red; */
    position: relative;
    width: 1200px;
    height: auto;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 40px;
    .faceimg{
      /* position: absolute; */
      /* outline: 1px dotted red; */
      width: 500px;
      height: 400px;
      background-image: url(${Faceimg});
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
      opacity: 0;
      animation: ${fadeIn} 1.5s ease-out forwards;
    }
    p{
      margin-bottom: 20px;
     
      &:nth-of-type(1){
        font-size: 40px;
      font-weight: 700;

      }
      &:nth-of-type(2){
       font-size:20px ;
      }
    }
  }
  .innermid{
    /* outline: 1px dotted red; */
    width: 1200px;
    height: 400px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;

    div{
      /* outline: 1px dotted red; */
      width: 300px;
      height: 300px;
      background-color: royalblue;
      border-radius: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      box-shadow: 3px 3px 15px rgba(0,0,0,0.5);
      P{
        font-size: 20px;
        color: #fff;

        &:nth-child(1){
          font-size: 30px;
          margin-bottom: 20px;
        }
        &:nth-child(2){}
      }
    }
  }
`
const Contact = () => {

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
   <>
    <Contactdiv>
      <div className='innertop'>
        <div className='faceimg'></div>
        <p>쉽고 빠르게, 전문적으로</p>
        <p>상담은 빠르고 정확하게</p>
        <p>간단한 랜딩페이지부터 기업홈페이지까지</p>
        <p>아래의 연락처로 문의주시면 상담 도와드리겠습니다.</p>
      </div>
      <div className='innermid'>
        <div className='box1'>
          <p>EMAIL</p>
          <p>GHJIGF@GMAIL.COM</p>
        </div>
        <div className='box1'>
          <p>KAKAO TALK</p>
          <p>BRANDER</p>
        </div>
        <div className='box1'>
          <p>PHONE</p>
          <p>011-1111-1111</p>
        </div>
     
      </div>
    </Contactdiv>
   </>
  )
}

export default Contact
