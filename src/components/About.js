import React, { useEffect } from 'react'
import styled from 'styled-components'
import Building from '../img/building.webp'
import Profession from "../img/profession.webp"

const Aboutdiv = styled.div`
  width: 100%;
  height: auto;
  margin-top: 100px;
  /* background-color: royalblue; */

  .abouttop{
    /* outline: 1px dotted red; */
    width: 1200px;
    height: 500px;
    margin: 0 auto;
    display: flex;
    padding-bottom: 80px;

    div{
      flex: 1;
      /* outline: 1px dotted red; */
    }
    .topleft{
      background-image: url(${Building});
      background-position: center;
      background-size: cover;
    }
    .topright{
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 50px;
      p{
        &:nth-child(1){
          font-size: 40px;
          font-weight: 400;
          padding-bottom: 20px;
        }
        &:nth-child(2){
          font-size: 16px;
          padding-bottom: 20px;
          span{
            font-weight: 700;
            font-size: 20px;
          }
        }
        &:nth-child(3){padding-bottom: 20px;}
        &:nth-child(4){padding-bottom: 20px;}
        &:nth-child(5){padding-bottom: 20px;}
      }
    }
  }
  .aboutmid{
    /* outline: 1px dotted red; */
    width: 1200px;
    height: auto;
    margin: 0 auto;
    padding-bottom: 50px;
    
    ul{
      display: flex;
      justify-content: space-around;
      align-items: center;
      gap: 150px;
      li{
        /* outline: 1px dotted red; */
        height: 300px;
        flex: 1;
        font-size: 30px;
        color: #fff;
        border-radius: 50%;
        text-align: center;
        line-height: 300px;
        font-weight: 700;
        background-color: #8291f3;
        box-shadow: 2px 2px 8px rgba(0,0,0,0.2);
        text-shadow: 1px 1px 4px rgba(0,0,0,0.2);
      }
    }
    p{
      text-align: center;
      font-size: 30px;
      font-weight: 600;
      &:nth-of-type(1){
        margin-top: 30px;
      }
      &:nth-of-type(2){
        font-size: 16px;
        line-height: 18px;
        padding-top: 20px;
        font-weight: 400;
      }
    }
  }
  .aboutbtm{
    /* outline: 1px dotted red; */
    width: 1200px;
    height: 400px;
    margin: 0 auto;
    display: flex;
    margin-top: 50px;
    margin-bottom: 80px;
    
    div{
      flex: 1;
      /* outline: 1px dotted red; */
    }
    .btmleft{
      display: flex;
      flex-direction: column;
      justify-content: center;
      line-height: 30px;
      text-align: center;
      p{
        &:nth-child(1){
          font-size: 25px;
        }
        &:nth-child(2){}
      }
    }
    .btmright{
      background-image: url(${Profession});
      background-position: right;
      background-size: cover;
      background-repeat: no-repeat;
    }

  }
`
const About = () => {

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <>
      <Aboutdiv>
        <div className='abouttop'>
            <div className='topleft'></div>
            <div className='topright'>
              <p>안녕하세요!</p>
              <p>고객을 위해 디자인하는 <span>BRANDER</span>입니다.</p>
              <p>2010년에 시작한 저희는 고객의 만족을 위해 달려가고 있습니다.</p>
              <p>랜딩페이지,기업형홈페이지 커스텀홈페이지 제작을 하고있습니다.</p>
              <p>고객의 니즈를 파악하고 제품과 서비스에 최적인 디자인을 하기 위해 노력합니다.</p>
              <p>감사합니다.</p>
            </div>
        </div>
        <div className='aboutmid'>
          <ul>
            <li>FAST</li>
            <li>CREATIVE</li>
            <li>PROFESSIONAL</li>
          </ul>
          <p>빠르고 창의적이고, 전문적인</p>
          <p>빠르고 창의적으로 작업하는 전문인력이 대기중입니다.<br/>고객의 니즈에 맞춰 만족스러운 사이트를 작업합니다.</p>
        </div>
        <div className='aboutbtm'>
          <div className='btmleft'>
            <p>고객의 만족을 최우선으로 합니다.</p>
            <p>더 좋은 서비스를 위해 노력하겠습니다.</p>
            <p>- BRANDER 일동 -</p>
          </div>
          <div className='btmright'></div>
        </div>  
      </Aboutdiv>
    </>
  )
}

export default About
