import React from 'react'
import styled from 'styled-components'
import Sample1 from '../img/sample1.webp'
import Sample2 from '../img/sample2.webp'
import Sample3 from '../img/sample3.webp'
import Servicebg from '../img/servicebg.webp'

const Servicediv = styled.div`
  /* outline: 1px dotted red; */
  width: 100%;
  height: 100%;
  padding: 100px 0px;
  background-image: url(${Servicebg});
  background-position: center;
  background-size: cover;
  background-color: #6f85e7;
  
  .serviceinner{
    /* outline: 1px dotted red; */
    width: 1200px;
    height: auto;
    margin: 0 auto;

    .detail{
      width: 1200px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      text-shadow: 1px 1px 1px rgba(0,0,0,0.2);
      .detailbtn{
        height: 80px;
        ul{
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 30px;
          li{
            /* outline: 1px dotted red; */
            height: 30px;
            width: 160px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 5px;
            background-color: #fff;
            box-shadow: 2px 2px 8px rgba(0,0,0,0.2);
            text-shadow: none;
            transition: 0.2s;
            font-weight: 600;
           /*  &:hover{
              scale: 1.02;
              cursor: pointer;
            } */
          }
        }
      }
     
      p{
        color: #fff;
        &:nth-child(1){
          font-size: 30px;
          margin-bottom: 10px;
        }
        &:nth-child(2){
          font-size: 25px;
          margin-bottom: 50px;
        }
        &:nth-child(3){
          margin-bottom: 10px;
        }
        &:nth-child(3){}
      }
    }

    div{
      /* outline: 1px dotted red; */
      width: 1000px;
      height: 300px;
      margin: 0 auto;
      display: flex;
      div{
        /* outline: 1px dotted red; */
      }
    }
    .boxwrap{
      width: 1100px;
      height: 1000px;
      background-color: #fff;
      padding: 30px;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      gap: 30px;
      box-shadow: 3px 3px 15px rgba(0,0,0,0.3);

    .top{
      .topleft{
        background-image: url(${Sample1});
        background-size: cover;
        background-repeat: no-repeat;
        border-radius: 5px;
        overflow: hidden;
        box-shadow: 3px 3px 10px rgba(0,0,0,0.5);
      }
      .topright{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        p{
          /* color: #fff; */
          /* text-shadow: 1px 1px 1px rgba(0,0,0,0.5); */
          &:nth-child(1){
            font-weight: 700;
            font-size: 30px;
            margin-bottom: 20px;
          }
          &:nth-child(2){
            margin-bottom: 10px;
          }
          &:nth-child(3){}
        }
      }
    }
    .mid{
      .midright{
        background-image: url(${Sample2});
        background-size: cover;
        background-repeat: no-repeat;
        border-radius: 5px;
        overflow: hidden;
        box-shadow: 3px 3px 10px rgba(0,0,0,0.5);
      }
      .midleft{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        p{
          /* color: #fff; */
          /* text-shadow: 1px 1px 1px rgba(0,0,0,0.5); */
          &:nth-child(1){
            font-weight: 700;
            font-size: 30px;
            margin-bottom: 20px;
          }
          &:nth-child(2){
            margin-bottom: 10px;
          }
          &:nth-child(3){}
        }
      }
    }
    .btm{
      .btmleft{
        background-image: url(${Sample3});
        background-size: cover;
        background-repeat: no-repeat;
        border-radius: 5px;
        overflow: hidden;
        box-shadow: 3px 3px 10px rgba(0,0,0,0.5);
      }
      .btmright{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        p{
          /* color: #fff;
          text-shadow: 1px 1px 1px rgba(0,0,0,0.5); */
          &:nth-child(1){
            font-weight: 700;
            font-size: 30px;
            margin-bottom: 20px;
          }
          &:nth-child(2){
            margin-bottom: 10px;
          }
          &:nth-child(3){}
        }
      }
    }
  }
  }
`
const Service = () => {
  return (
    <>
      <Servicediv>
        <div className='serviceinner'>
          <div className='detail'>
            <p>여러 스타일의 템플릿을 준비중입니다.</p>
            <p>아래의 템플릿을 확인하시고 문의주세요</p>
            <p>간단한 랜딩페이지, 기업형 홈페이지와 커스텀 홈페이지까지!</p>
            <p>원페이지부터 여러페이지의 홈페이지까지!</p>
            <div className='detailbtn'>
                <ul>
                  <li>기업형 흠페이지</li>
                  <li>랜딩페이지</li>
                  <li>커스텀페이지</li>
                </ul>
            </div>
          </div>
          <div className='boxwrap'>

            <div className='top'
               onClick={() => window.open('https://gumi-gomi.github.io/pub_sample2/build/', '_blank')}
               role="button"
               aria-label="기업형 홈페이지 샘플 보기"
               style={{ cursor: 'pointer' }}
            >
              <div className='topleft'></div>
              <div className='topright'>
                <p>1.기업형 홈페이지 샘플</p>
                <p>깔끔한 인터페이스와 간단한 기능을 더한 홈페이지 샘플입니다.</p>
                <p>반응형으로 제작되어 PC와 태블릿 스마트폰에서 다른 화면을 보여줍니다.</p>
              </div>
            </div>
            <div className='mid'>
            <div className='midleft'>
            <p>2.랜딩페이지 샘플</p>
                <p> 1~2개의 페이지로 제작하는 랜딩페이지 샘플입니다.</p>
                <p style={{marginBottom:'10px'}}>제품을 홍보하거나 메인사이트로 이동하게하는 페이지로 적합합니다.</p>
                <p>반응형으로 제작되어 PC와 태블릿 스마트폰에서 다른 화면을 보여줍니다.</p>
            </div>
            <div className='midright'
               onClick={() => window.open('https://gumi-gomi.github.io/pub1/build/', '_blank')}
               role="button"
               aria-label="기업형 홈페이지 샘플 보기"
               style={{ cursor: 'pointer' }}
            ></div>
            </div>
            <div className='btm'>
            <div className='btmleft'
              onClick={() => window.open('https://gumigomi-illust.com/', '_blank')}
              role="button"
              aria-label="기업형 홈페이지 샘플 보기"
              style={{ cursor: 'pointer' }}
            ></div>
            <div className='btmright'>
            <p>3.커스텀페이지 샘플</p>
                <p>보내주시는 디자인으로 작업하거나 상담을 통해 디자인을 결정하며</p>
                <p style={{marginBottom:'10px'}}>회원가입/로그인, 문의의사항기능, 결제시스템을 사용가능합니다.</p>
                <p style={{marginBottom:'10px'}}>제품이나 서비스를 판매하는 사이트의 제작에 적합합니다.</p>
                {/* <p>반응형으로 제작되어 PC와 태블릿 스마트폰에서 다른 화면을 보여줍니다.</p> */}
            </div>
            </div>
            
          </div>
        </div>
      </Servicediv>
    </>
  )
}

export default Service
