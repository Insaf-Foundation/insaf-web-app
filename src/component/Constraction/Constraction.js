import React from 'react';
import  under from '../../assets/images/construction.png';
const Constraction = () => {
    return (
            <div className='grid grid-cols-1 lg:grid-cols-2 container mx-auto'>
           <div>
           <img src={under} alt='Clipping Path Hero' className='' data-aos="fade-up"/>
           </div>

           <div data-aos="fade-up">
              <h2 className='text-5xl lg:pt-40 pl-5 font-extrabold  text-green-600 pb-5'>System Update</h2>
              <p className='pl-5'>System updates are critical for ensuring the security and functionality of our applications. By regularly installing updates, improve performance, and access new features. Don't ignore those update notifications - take a few days to update our system and stay ahead of the curve.</p>
           </div>
        </div>
    );
};

export default Constraction;