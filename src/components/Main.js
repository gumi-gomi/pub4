import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Bgmp4 from "../img/bgwebp.webp"
import Circlebg1 from "../img/circlebg1.webp"
import Circlebg2 from "../img/circlebg2.webp"
import Circlebg3 from "../img/circlebg3.webp"
import Circlebg4 from "../img/circlebg4.webp"
import Logo from "../img/logo.webp"
import Paperbg from "../img/paperbg.webp"
import Body from "./Body";
import Body2 from "./Body2";
import Body3 from "./Body3";
import Ending from "./Ending";

// --------------------------------animation ----------------
const slideInFromTop = keyframes`
  0% {
    transform: translateY(-50%);
    opacity: 0;
  }
  100% {
    transform: translateY(0%);
    opacity: 1;
  }
  `;
const slidetoTop = keyframes`
  0% {
    transform: translateY(0%);
    opacity: 0;
  }
  100% {
    transform: translateY(-50%);
    opacity: 1;
    
  }
  `;

const leftright = keyframes`
 0% {
   left: -3vh;
  }
  100% {
    left: 100%;
  }
  `
const longline = keyframes`
 0% {
   width: 0%;
  }
  100% {
    width: 100%;
  }
  `
const shadbigger = keyframes`
 0% {
   box-shadow: 0px 0px 20px rgba(0,0,0,0.6);
  }
  100% {
    box-shadow: 0px 0px 50px rgba(164,201,262,0.8);
  }
  `
const textScroll = keyframes`
0% {
  transform: translateX(0%);
}
100% {
  transform: translateX(-50%);
}
`
const Weighttext = keyframes`
0% {
  font-weight: 400;
}
100% {
  font-weight: 700;
}
`
// --------------------------------animation ----------------

// Styled Components
const AppWrapper = styled.div`
  width: 100%;
  height: 200vh; /* 충분한 스크롤 높이 */
  background: #f0f0f0;
  position: relative;
  
`;

const BaseDiv = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 94vh; /* 화면 높이 */
  overflow: hidden;
  /* background-color: #333; */
  /* box-shadow: 0px 5px 20px rgba(0,0,0,0.4); */

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${Bgmp4});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.17; /* 배경 이미지의 투명도 */
    z-index: 0; /* 배경 이미지가 뒤에 표시되도록 */
  }

  /* 컨텐츠는 배경 이미지 위에 표시 */
  display: flex;
  flex-direction: column;
  z-index: 1; /* 내용이 위에 표시되도록 */
`;

const Circle = styled.div`
  position: absolute;
  top: 50%;
  right: ${(props) => `${props.position}px`}; /* 동적 위치 */
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};
  /* background-color: #ff5722; */
  border-radius: 50%;
  transform: translateY(-50%);
  overflow: hidden;
  transition: width 0.1s ease-out, height 0.1s ease-out, right 0.1s ease-out; /* 위치와 크기 변화를 동시에 */
  box-shadow:3px 3px 15px rgba(0,0,0,0.3);
`;

const CircleSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%; /* 슬라이더 크기 고정 */
  height: 100%;
  z-index: 5;
  display: flex;
  transform: translateX(${(props) => `-${props.activeIndex * 100}%`});
  transition: transform 1s ease-in-out;
  `;

const Slide = styled.div`
  flex: 0 0 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  z-index: 5;
  background-position: center;
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  .line{
      position: absolute;
      width: 100%;
      height: 0.01vw;
      background-color: #fff;
      top: 50%; transform: translateY(-50%);
      
    }
  

  .centerbtn{
    /* outline: 1px dotted red; */
    position: absolute;
    width: 15vw;
    height: 15vw;
    left: 50%; transform: translateX(-50%);
    top: 50%; transform: translateY(-50%);
    border-radius: 50%;
    background-color: rgba(55,135,216,1);
    box-shadow: 0px 0px 20px rgba(55,135,216,0.5);
    text-align: center;
    /* line-height: 15vw; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1vw;
    color: #fff;
    font-weight: 700;
    text-shadow: 1px 1px 3px rgba(0,0,0,0,0.6);
    transition: 0.2s;
    animation: ${shadbigger} 0.8s ease-in-out infinite;
    .linetext{
        /* outline: 1px dotted red; */
        padding: 0px 50px;
        display: flex;
        width: 100vw;
        position: absolute;
        top:5vw;
        font-size: 20px;
        color: #fff;
        left: 40%; 
        transform: translateX(-50%);
        justify-content: space-around;
        li{
          font-size: 0.8vw;
          &:nth-child(1){}
          &:nth-child(2){
            padding-right: 100px;
          }
          &:nth-child(3){
            padding-left: 100px;
          }
          &:nth-child(4){}
        }
      }
    p{
      &:nth-child(1){
        font-size: 0%.5;
        font-weight: 300;
      }
      &:nth-child(2){}
      &:nth-child(3){
        outline: 1px solid royalblue;
        padding: 0.5vw 1vw;
        border-radius: 5px;
        margin-top: 10px;
        font-size: 0.8vw;
        background-color: #317fcf;
        box-shadow: 1px 1px 3px rgba(0,0,0,0.3);
        transition: 0.1s;
        
        &:hover{
          cursor: pointer;
          scale: 1.04;
          box-shadow: 1px 1px 5px rgba(0,0,0,0.1);
        }
      }
    }

    
   /*  &:hover{
      cursor: pointer;
      scale: 1.05;
    } */


  }
`;

const FadeSlider = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: ${(props) => (props.isVisible ? "1" : "0")};
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
  pointer-events: ${(props) => (props.isVisible ? "auto" : "none")};
  transition: opacity 2s ease-in-out, visibility 0s ease-in-out;
  background-size: cover;
  background-position: center;

  .fadediv {
    position: absolute;
    left: 15%;
    top: 50%;
    transform: translateY(-50%);
    p {
      font-weight: 700;
      text-align: left;
      font-size: 9.5vh;
      line-height: 10vh;
      opacity: 0;
      transform: translateY(-50%);
      animation: ${slideInFromTop} 0.5s ease-in-out forwards;

      &:nth-child(1) {
        color: #2563b4;
        animation-delay: 0.2s;
      }
      &:nth-child(2) {
        color: #000;
        animation-delay: 0.4s;
      }
      &:nth-child(3) {
        color: #000;
        animation-delay: 0.6s;
      }
    }
  }
  .numdiv{
    position: absolute;
    left: 10%;
    top: 38%;
    transform: translateY(-50%);
    p{
      font-size: 20px;
      font-weight: 700;
      color: #696969;
      animation: ${slideInFromTop} 1.5s ease-in-out forwards;

      &:nth-child(1){}
      &:nth-child(2){}
      &:nth-child(3){}
    }
  }
  .btmtext{
    /* outline: 1px dotted red; */
    position: absolute;
    bottom: 0%;
    right: 20%;
    width: 25vw;
    height: 13vw;
    transition: 0.2s;
    p{
      font-size: 12px;
      color: #393939;
      line-height: 20px;
      text-align: right;
      animation: ${slideInFromTop} 1.5s ease-in-out forwards;
      &:nth-child(1){}
      &:nth-child(2){}
      &:nth-child(3){}
      &:nth-child(4){
        font-weight: 700;
        color: royalblue;
      }
    }
  }
  .toptext{
    /* outline: 1px dotted red; */
    position: absolute;
    top: 25%;
    z-index: 0;
    right: 16%;
    font-size: 10vw;
    font-weight: 700;
    letter-spacing: -1px;
    text-align: center;

    .topcircle{
      width: 5vw;
      height: 5vw;
      background-color: royalblue;
      border-radius: 50%;
      animation: ${slideInFromTop} 1.5s ease-in-out forwards;
      position: absolute;
      z-index: 0;
    }
    p{
      opacity: 0;
      transition: 0.2s;
      animation: ${slidetoTop} 0.5s ease-in-out forwards;
      &:nth-child(1){
        animation-delay: 0.5s;
      }
      &:nth-child(2){
        animation-delay: 0.7s;

      }
    }
  }
  .movecircle{
    position: absolute;
    width: 3vh;
    height: 3vh;
    border-radius: 50%;
    background-color: royalblue;
    top: 66.5%;
    animation: ${leftright} 6s ease-in-out forwards;
    /* animation-delay: 0.5s; */
  }
  .linediv{
    position: absolute;
    top: 68%;
    animation: ${longline} 6s ease-in-out forwards;
    border-bottom: 1px solid #000;
    opacity: 0.3;
  }
`;

const Bodydiv = styled.div`
  /* outline: 1px dotted red; */
  margin-top: 0vh;
  position: relative;
  z-index: 9;
  width: 100%;
  height: 600px;
  background: #fff;
  padding: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  /* background-color: #c4d0e7; */
  background: linear-gradient(to right, #c4d0e7, #6c8eda);
  overflow: hidden;
  box-sizing: border-box;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${Paperbg});
    background-size: cover;
    background-position: center;
    opacity: 0.75; /* 투명도 설정 */
    z-index: -1; /* 본문 콘텐츠 위에 배경 이미지가 오지 않도록 */
    overflow: hidden;
  }

  .bodytext{
    position: absolute;
    left: 260px;
    top: 150px;
    p{
      &:nth-child(1){
        font-size: 30px;
        padding-bottom: 5px;
        font-weight: 300;
      }
      &:nth-child(2){
        font-size: 30px;
        padding-bottom: 20px;
        font-weight: 300;
      }
      &:nth-child(3){
        font-size: 45px;
        font-weight: 700;
        padding-bottom: 35px;
      }
      &:nth-child(4){
        font-size: 14px;
        font-weight: 600;
        padding-bottom: 25px;
      }
      &:nth-child(5){
        font-size: 12px;
        line-height: 20px;
      }
    }
  }
  .smalltext{
    position: absolute;
    left: 170px;
    top: 110px;
    
    p{
      font-size: 11px;
      line-height: 30px;
    
    }
  }
  .slidetext {
    /* outline: 1px dotted red; */
    position: absolute;
    bottom: 0px;
    bottom: -2%;
    left: 0; /* 텍스트 시작 위치를 부모의 왼쪽에 맞춤 */
    /* width: 100%; 부모의 너비에 맞게 조정 */
    font-size: 140px;
    white-space: nowrap; /* 텍스트 줄바꿈 방지 */
    animation: ${textScroll} 30s linear infinite;
    display: flex;
    box-sizing: border-box;

    p {
      font-weight: 700;
      letter-spacing: -10px;

      span {
        color: royalblue;
      }
    }
  }
  .logobox{
    /* outline: 1px dotted red; */
    width: 40%;
    height: 80%;
    position: absolute;
    right: 0;
    top: 0;
    background-image: url(${Logo});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    
    .logotext{
      position: absolute;
      top: 70%;
      font-size: 50px;
      text-transform: uppercase;
      font-weight: 700;
      color: #fff;
      text-shadow: 0px 0px 2px rgba(0,0,0,0.3);
    }
    .boxpart{
      /* outline: 1px dotted red; */
      width: 100%;
      height: 100%;
      div{
        position: absolute;
      text-align: center;
      line-height: 250px;
      width: 250px;
      height: 250px;
      border-radius: 50%;
      box-shadow: 3px 3px 15px rgba(0,0,0,0.4);
      font-size: 30px;
      font-weight: 700;
      color: #898989;
      &:nth-child(1){
        left: -350PX;
        top: 25%;
        background-color: #fff;
        z-index: -1;
      }
      &:nth-child(2){
        color: #fff;
        left: -170PX;
        top: 25%;
        background-color: #496eb9;
        z-index: 0;
      }
      &:nth-child(3){
        left: 40PX;
        top: 25%;
        background-color: #fff;
      }
      }
    }
  }
`;

function Main() {
  const [circleSize, setCircleSize] = useState(250); // 동그라미 초기 크기
  const [circlePosition, setCirclePosition] = useState(-50); // 동그라미 초기 위치
  const [activeSlideIndex, setActiveSlideIndex] = useState(0); // 슬라이더 인덱스
  const [activeFadeIndex, setActiveFadeIndex] = useState(0); // 페이드 슬라이더 인덱스
  const [isSticky, setIsSticky] = useState(true); // BaseDiv의 위치 상태 제어
  const [scrollThreshold, setScrollThreshold] = useState(0); // 스크롤 임계값 저장

  const fadeImages = [
    {
      num:'01',
      text1:"가맹모집에",
      text2:"최적화된",
      text3:"웹사이트",
      btmt1:'아이템이 같다고 홈페이지도 같을 수는 없습니다.',
      btmt2:'프랜차이즈에 맞는 차별화된 맞춤형 표현으로',
      btmt3:'가맹모집을 이끌어냅니다.',
      btmt4:'그러면서도 홈페이지의 본질을 잃지 않습니다.',
      topt1:'PROFE',
      topt2:'SSIONAL',
      topcirclePosition: { top: '10%', left: '5%' } ,
      size :{ width :'9vw' , height: '9vw'},
    },
    {
      num:'02',
      text1:"우리는",
      text2:"프랜차이즈",
      text3:"전문가",
      btmt1:'누구보다 프랜차이즈 시장을 잘 아는',
      btmt2:'우리의 노하우가 집결되어',
      btmt3:'분산되어 있는 프랜차이즈 브랜딩 요소를 통합하고',
      btmt4:'온.오프라인에 걸쳐 퀄리티 높은 솔루션을 제공합니다.',
      topt1:'DIFFER',
      topt2:'ENT',
      topcirclePosition: { top: '20%', left: '10%' },
      size :{ width :'8vw' , height: '8vw'},
    },
    {
      num:'03',
      text1:"준비된",
      text2:"자료가 없어도",
      text3:"BRANDER",
      btmt1:'제작이 처음이신 분들도 쉽고, 빠르게 제작 가능한',
      btmt2:'우리만의 전문 프로세스와 노하우로',
      btmt3:'고객을 리딩합니다.',
      btmt4:'준비된 자료가 없어도 편하게 문의하세요.',
      topt1:'READ',
      topt2:'ING',
      topcirclePosition: { top: '10%', left: '-15%' },
      size :{ width :'10vw' , height: '10vw'},
    }
  ];
  

  const sliderImages = [
    {
      num: 1,
      bgImage: Circlebg1,
      text :'GUMIGOMI_ILLUST',
      line1 : '1',
      line2 : '기업형 샘플',
      line3 : '요식업 샘플',
      line4 : 'R3F 샘플',
      link : 'https://gumigomi-illust.com/'
    },
    {
      num: 2,
      bgImage: Circlebg2, 
      text :'기업형홈페이지 샘플',
      line1 : '일러스트 판매 사이트',
      line2 : '2',
      line3 : '요식업 샘플',
      line4 : 'R3F 샘플',
      link : 'https://gumi-gomi.github.io/pub_sample2/build/'
    },
    {
      num: 3,
      bgImage: Circlebg3, 
      text :'요식업홈페이지 샘플',
      line1 : '일러스트 판매 사이트',
      line2 : '기업형 샘플',
      line3 : '3',
      line4 : 'R3F 샘플',
      link : 'https://gumi-gomi.github.io/pub3/build/'
      
    },
    {
      num: 4,
      bgImage: Circlebg4, 
      text :'R3F샘플',
      line1 : '일러스트 판매 사이트',
      line2 : '기업형 샘플',
      line3 : '요식업 샘플',
      line4 : '4',
      link : 'https://gumi-gomi.github.io/r3f-notebook/build/'
    },
  ];

  useEffect(() => {
    // 페이드 슬라이더 전환
    const fadeInterval = setInterval(() => {
      setActiveFadeIndex((prevIndex) => (prevIndex + 1) % fadeImages.length);
    }, 6000);

    return () => clearInterval(fadeInterval);
  }, [fadeImages.length]);

  useEffect(() => {
    // 슬라이더 전환
    const sliderInterval = setInterval(() => {
      setActiveSlideIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
    }, 3500);

    return () => clearInterval(sliderInterval);
  }, [sliderImages.length]);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const divHeight = window.innerHeight * 0.9; // 기준 div의 높이
    const maxCircleSize = divHeight * 2.7; // 동그라미 최대 크기
    const maxRightPosition = -240; // 동그라미 최대 위치 (스크롤 다운)
    const initialPosition = -50; // 동그라미 초기 위치 (스크롤 업)
    const newSize = Math.min(
      Math.max(250, 100 + (scrollY / divHeight) * maxCircleSize),
      maxCircleSize
    );
    setCircleSize(newSize);

    const newPosition = scrollY > divHeight
      ? Math.max(maxRightPosition, -100)
      : Math.min(initialPosition, -50);

    setCirclePosition(newPosition);
  };


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollThreshold]);

  return (
    <>
      <AppWrapper>
        <BaseDiv isSticky={isSticky}>
          {/* 페이드 슬라이더 */}
          {fadeImages.map((item, index) => (
  <FadeSlider
    // key={index}
    isVisible={index === activeFadeIndex}
    key={`fade-${index}-${activeFadeIndex}`}
  > 
  <div className="linediv"/>
  <div className="movecircle"/>
  <div className="numdiv">
    <p>{item.num}</p>
  </div>
  <div className="btmtext">
      <p>{item.btmt1}</p>
      <p>{item.btmt2}</p>
      <p>{item.btmt3}</p>
      <p>{item.btmt4}</p>
  </div>
  <div className="toptext">
  <div
      className="topcircle"
      style={{
        top: item.topcirclePosition.top,
        left: item.topcirclePosition.left,
        width: item.size.width,
        height :item.size.height,
      }}
    />
      <p>{item.topt1}</p>
      <p>{item.topt2}</p>
   

  </div>
    <div className="fadediv" style={{ textAlign: "center", color: "white" }}>
      <p>{item.text1}</p>
      <p>{item.text2}</p>
      <p>{item.text3}</p>
    </div>
  </FadeSlider>
          ))}

          {/* 동그라미 */}
         {/*  <Circle size={circleSize} position={circlePosition}>
            <CircleSlider activeIndex={activeSlideIndex}>
              {sliderImages.map((image, index) => (
                <Slide key={index} bgImage={image.bgImage}>
                    <div className="line">
                    </div>

                  <div className="centerbtn">
                    <p>{image.num}</p>
                    <p>{image.text}</p>
                    <a style={{outline:'1px solid royalblue', padding:'10px', borderRadius:'5px', boxShadow:'0px 0px 15px rgba(0,0,0,0.4)', backgroundColor:'#2b78c5', textDecoration:'none', color:'#fff'}} href={image.link} target="_blank"><p>홈페이지 바로가기</p></a>
                      <ul className="linetext">
                        <li>{image.line1}</li>
                        <li>{image.line2}</li>
                        <li>{image.line3}</li>
                        <li>{image.line4}</li>
                      </ul>
                  </div>
                </Slide>
              ))}
            </CircleSlider>
          </Circle> */}
        </BaseDiv>
      </AppWrapper>
        <Bodydiv>
          <div className="smalltext">
              <p>DESIGN</p>
              <p>BRANDING</p>
              <p>PHOTO</p>
              <p>WEBSITE</p>
              <p>MARKETING</p>
              <p>INCUBATING</p>
          </div>
          <div className="bodytext">
              <p>당신이 필요한</p>
              <p>모든 것을</p>
              <p>한번에</p>
              <p>단순 외주 작업이 아닙니다.</p>
              <p>국내 프랜차이즈 전문 웹에이전시와 경험많은 브랜딩 팀이<br/>한 공간에서 고객님을 위한 수많은 회의를 거칩니다.</p>
          </div>
          <div className="slidetext">
            <p>DESING<span>BRANDING</span>PHOTO<span>WEBSITE</span>MARKETING<span>INCUBATING</span></p>
            <p>DESING<span>BRANDING</span>PHOTO<span>WEBSITE</span>MARKETING<span>INCUBATING</span></p>
            <p>DESING<span>BRANDING</span>PHOTO<span>WEBSITE</span>MARKETING<span>INCUBATING</span></p>
          </div>
          <div className="logobox">
            <div className="boxpart">
              <div>FAST</div>
              <div>CREATIVE</div>
              <div>PROFESSIONAL</div>
            </div>
            {/* <div className="logotext">
            We create brands.
            </div> */}
          </div>
        </Bodydiv>
        <Body/>
    <Body2/>
    <Body3/>
    <Ending/>
    </>
  );
}

export default Main;
