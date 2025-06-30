import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Main from "./components/Main";
import Header from "./components/Header";
import Body from "./components/Body";
import Body2 from "./components/Body2";
import Body3 from "./components/Body3";
import Footer from "./components/Footer";
import Fixed from "./components/Fixed";
import Ending from "./components/Ending";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Service from "./components/Service";


function App() {
 
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/service" element={<Service/>}/>
    </Routes>
    <Footer/>
    <Fixed/>
    </>
  );
}

export default App;
