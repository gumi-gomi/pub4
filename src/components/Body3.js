import React from 'react'
import styled from 'styled-components'
import Boxbg1 from "../img/longbg1.webp"
import Boxbg2 from "../img/longbg2.webp"
import Boxbg3 from "../img/longbg3.webp"
import Boxbg4 from "../img/longbg4.webp"
import Boxbg5 from "../img/longbg5.webp"
import Paperbg from "../img/paperbg2.webp"

const Bodybox = styled.div`
  width: 100%;
  height: 1800px;
  background-color: #dad6f7;
  background-image: url(${Paperbg});

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #435ecf;
    opacity: 0.75; /* 투명도 설정 */
    z-index: -1; /* 본문 콘텐츠 위에 배경 이미지가 오지 않도록 */
    overflow: hidden;
  }


  .boxinner{
    /* outline: 1px dotted red; */
    width: 1400px;
    height: 1800px;
    margin: 0 auto;
    position: relative;
    box-sizing: border-box;
    overflow: hidden;

    p{
      text-align: center;
      padding-top: 50px;
      font-size: 40px;
      font-weight: 700;
      text-shadow: 2px 2px 2px rgba(0,0,0,0.2);
      span{
        color: #435ecf;
      }
    }
    div{
      /* outline: 1px dotted red; */
      width: 1200px;
      height: 300px;
      position: absolute;
      left: 50%; transform: translateX(-50%);
      background-color: #fff;
      box-shadow: 3px 3px 15px rgba(0,0,0,0.4);
      text-align: center;
      border-radius: 5px;
      transition: 0.1s;
      opacity: 1;

      .text{
        text-align: left;
        position: absolute;
        left: 60px;
        top: 70px;
        font-size: 20px;
        font-weight: 400;

        span{
          font-weight: 700;
          color: black;
          font-size: 30px;
          line-height: 50px;
        }
      }
      &:hover{
        cursor: pointer;
        opacity: 1;
        box-shadow: 5px 5px 20px rgba(0,0,0,0.6);
      }

      &:nth-child(1){
        top: 120px;
        /* left: 35%; */
        z-index: 5;
        background-image: url(${Boxbg1});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;

        p{
          color: #fff;
          span{
            color: #fff;
          }
        }
        
        &:hover{
        z-index: 7;
        scale: 1.02;
      }
      }
      &:nth-child(2){
        top: 440px;
        z-index: 4;
        /* left: 43%; */
        background-image: url(${Boxbg2});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        p{
          color: #fff;
          span{
            color: #fff;
          }
        }
        &:hover{
        z-index: 7;
        scale: 1.03;
      }

      }
      &:nth-child(3){
        top:760px;
        z-index: 3;
        background-image: url(${Boxbg3});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        p{
          color: #fff;
          span{
            color: #fff;
          }
        }
        &:hover{
        z-index: 7;
        scale: 1.03;
      }
      }
      &:nth-child(4){
        top: 1080px;
        z-index: 2;
        /* left: 58%; */
        background-image: url(${Boxbg4});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;

        p{
          color: #fff;
          span{
            color: #fff;
          }
        }
        &:hover{
        z-index: 7;
        scale: 1.03;
      }
      }
      &:nth-child(5){
        top: 1400px;
        z-index: 1;
        /* left : 65%; */
        background-image: url(${Boxbg5});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        p{
          color: #fff;
          span{
            color: #fff;
          }
        }
        &:hover{
        z-index: 7;
        scale: 1.03;
      }
      }
    }
  }
`
const Body3 = () => {
  return (
    <>
      <Bodybox>
        <div className='boxinner'>
      
            <div onClick={() => window.open('https://gumigomi-illust.com/', '_blank')}
              role="button"
              aria-label="기업형 홈페이지 샘플 보기"
              style={{ cursor: 'pointer' }}
              >
              <p className='text'>
                일러스트판매 사이트<br/>
                <span>GUMIGOMI_ILLUST</span>
              </p>
            </div>
            <div 
              onClick={() => window.open('https://gumi-gomi.github.io/pub_sample2/build/', '_blank')}
              role="button"
              aria-label="기업형 홈페이지 샘플 보기"
              style={{ cursor: 'pointer' }}
            >
            <p className='text'>
                기업형 홈페이지 샘플<br/>
                <span>LOGO 마케팅</span>
              </p>
            </div>
            <div
               onClick={() => window.open('https://gumi-gomi.github.io/pub3/build/', '_blank')}
               role="button"
               aria-label="기업형 홈페이지 샘플 보기"
               style={{ cursor: 'pointer' }}
            >
            <p className='text'>
                요식업 홈페이지 샘플<br/>
                <span>LOGO FOOD</span>
              </p>
            </div>
            <div
              onClick={() => window.open('https://gumi-gomi.github.io/dental_proj/build/', '_blank')}
              role="button"
              aria-label="기업형 홈페이지 샘플 보기"
              style={{ cursor: 'pointer' }}
            >
            <p className='text'>
                병원 홈페이지 샘플<br/>
                <span>바른이 치과</span>
              </p>
            </div>
            <div
               onClick={() => window.open('https://gumi-gomi.github.io/r3f-notebook/build/', '_blank')}
               role="button"
               aria-label="기업형 홈페이지 샘플 보기"
               style={{ cursor: 'pointer' }}
            >
            <p className='text'>
                3D요소가 들어간 페이지<br/>
                <span>R3F-Sample</span>
              </p>
            </div>

            <p><span>B</span>RANDER</p>
        </div>
      </Bodybox>
    </>
  )
}

export default Body3
