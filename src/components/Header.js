import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Logo from '../img/logo.webp'
import { Link, useLocation } from 'react-router-dom'


const Headerwrap = styled.div`
 /* outline: 1px dotted red; */
 width: 1200px;
 height: 80px;
 position: absolute;
 z-index: 10;
 top: 0;
 left: 50%; transform: translateX(-50%);
 display: flex;
 justify-content: space-between;
 line-height: 80px;

 .logo{
  /* outline: 1px dotted red; */
  font-size: 30px;
  font-weight: 700;
  background-image: url(${Logo});
  background-position: left;
  background-size: contain;
  background-repeat: no-repeat;
  width: 60px;
  font-weight: 400;
  padding-left: 60px;
  font-size: 20px;
  color: ${(props) => (props.servicePage ? "#fff" : "rgba(0,0,0,0.7)")};
    text-shadow: ${(props) =>
      props.servicePage ? "1px 1px 3px rgba(255, 255, 255, 0.5)" : "1px 1px 1px rgba(0,0,0,0.3)"};
  margin-top: 20px;

  .link{
    text-decoration: none;
    color: ${(props) => (props.servicePage ? "#fff" : "#000")};
  }
 }
 ul{
  display: flex;
  gap: 30px;
  
  .link{
    text-decoration: none;
    color: #000;
    li{
      font-size: 20px;
      transition: 0.2s;
      color: ${(props) => (props.servicePage ? "#fff" : "rgba(0,0,0,0.7)")};
    text-shadow: ${(props) =>props.servicePage ? "1px 1px 3px rgba(255, 255, 255, 0.5)" : "1px 1px 1px rgba(0,0,0,0.3)"};

/* &:hover {
  text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.5), 0px 0px 5px rgba(256, 256, 256, 0.6),
              0px 0px 10px rgba(256, 256, 256, 0.8), 0px 0px 15px rgba(256, 256, 256, 1);
} */

      &:hover{
        color: #2563b4;
        cursor: pointer;
        scale: 1.05;
        /* font-weight: 500; */
        /* text-shadow:0px 0px 2px rgba(256,256,256,1), 0px 0px 5px rgba(0,0,0,0.4), 0px 0px 10px rgba(0,0,0,0.25),0px 0px 15px rgba(0,0,0,0.1); */
      }
    }
  }
 }

`
const Header = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  const [atTop, setAtTop] = useState(true); // 최상단 여부 상태 추가
  const location = useLocation()

    const servicePage = location.pathname === "/service"

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 100); // 100px 이상 스크롤 시 슬라이드 다운
      setAtTop(currentScrollY === 0); // 최상단 여부 확인
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Headerwrap isScrolled={isScrolled} atTop={atTop} servicePage={servicePage}>
        <div className='logo'><Link to='/' className='link'>BRANDER</Link></div>
        <ul servicePage={servicePage}>
          <Link to='./about' className='link'><li>ABOUT US</li></Link>
          <Link to='./contact' className='link'><li>CONTACT US</li></Link>
          <Link to='./service' className='link'><li>SERVICE</li></Link>
          {/* <Link to='./about' className='link'><li>PLAYGROUND</li></Link> */}
        </ul>
      </Headerwrap>
    </>
  )
}

export default Header
