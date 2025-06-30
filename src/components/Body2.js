import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Bodybox = styled.div`
  width: 100%;
  height: auto;
  .boxinner {
    width: 70%;
    height: auto;
    margin: 0 auto;
    ul {
      display: flex;
      
      /* Link에 스타일 적용 */
      a {
        display: flex;
        flex: 1;
        text-decoration: none;
        color: #000;
        transition: 0.2s;
        
        /* hover 효과를 Link에 적용 */
        &:hover {
          border-radius: 50%;
          background-color: royalblue;
          cursor: pointer;
          color: #fff;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
          box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.5);
        }
        
        li {
          aspect-ratio: 1;
          box-sizing: border-box;
          text-align: center;
          width: 100%;
          font-weight: 700;
          font-size: 1.4vw;
          letter-spacing: -1px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          
          span {
            font-size: 0.7vw;
            margin-top: 0.3vw;
            font-weight: 400;
          }
        }
      }
    }
  }
`

const Body2 = () => {
  const Alert = () => {
    alert("상세페이지 제작중")
  }
  
  return (
    <>
      <Bodybox>
        <div className='boxinner'>
          <ul>
            <Link to="/about">
              <li>ABOUT US<br/><span>우리가 하는일</span></li>
            </Link>
            <Link to="/contact">
              <li>CONTACT US<br/><span>상담신청은 이쪽</span></li>
            </Link>
            <Link to="/service">
              <li>SERVICE<br/><span>서비스 소개</span></li>
            </Link>
            {/* <li onClick={Alert}>CONTACT US<br/><span>의뢰하기</span></li> */}
          </ul>
        </div>
      </Bodybox>
    </>
  )
}

export default Body2