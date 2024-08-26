import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Shared/Header/Header.js';
import Footer from '../Shared/Footer/Footer.js';
import HeaderTop from '../Shared/HeaderTop/HeaderTop.js';
import Background from '../assets/images/floating_elements.png';
const Main = () => {
    return (
        <div style={{ background: `url(${Background})`, }}>
            <HeaderTop></HeaderTop>
            <Header></Header>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Main;