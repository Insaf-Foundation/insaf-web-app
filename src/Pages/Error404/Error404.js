import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import HeaderTop from '../../Shared/HeaderTop/HeaderTop';
import Background from  '../../assets/images/floating_elements.png';
import errorpageimg from '../../assets/images/errorpage.png';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
const Error404 = () => {
  useTitle("Error 404");
    return (
        <div className='' style={{ background: `url(${Background})`, }}>
            <HeaderTop></HeaderTop>
            <Header></Header>
            <div className='pt-15 grid grid-cols-1 container mx-auto'>
            <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row">
    <img src={errorpageimg}  alt='Error404' />
    <div>
      <h1 className="text-8xl font-bold text-green-600 ">404</h1>
      <p className="py-6">The 404 error message is a common occurrence on the internet, and it is something that every web user has encountered at least once. This error message appears when a user tries to access a webpage that doesn't exist or has been removed. The message is usually displayed as "404 Not Found" or "Error 404".</p>
      <Link className="btn bg-green-600 rounded-none border-green-600 border-2 hover:bg-white hover:text-green-600 " to='/'>Return Back</Link>
    </div>
  </div>
</div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Error404;