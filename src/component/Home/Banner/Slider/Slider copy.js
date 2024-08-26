import React, { useRef } from 'react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import './Slider.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slide01 from '../../../../assets/images/slide01.jpg';
import slide02 from '../../../../assets/images/slide02.jpg';
import slide03 from '../../../../assets/images/slide03.jpg';
import slide04 from '../../../../assets/images/slide04.jpg';
import slide05 from '../../../../assets/images/slide05.jpg';
import slide06 from '../../../../assets/images/slide06.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';

const Slider = () => {
    const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
    return (
       
     <Swiper 
 
     spaceBetween={30}
     centeredSlides={true}
     autoplay={{
       delay: 2500,
       disableOnInteraction: false,
     }}
     pagination={{
       clickable: true,
     }}
     navigation={true}
     modules={[Autoplay, Pagination, Navigation]}
     onAutoplayTimeLeft={onAutoplayTimeLeft}
     className="mySwiper"
     >
        
     
      <SwiperSlide><img src={slide01} alt='clipping Path'  className='rounded-lg '/></SwiperSlide>
        <SwiperSlide><img src={slide02} alt='clipping Path' className='rounded-lg ' /></SwiperSlide>
        <SwiperSlide><img src={slide03} alt='clipping Path' className='rounded-lg ' /></SwiperSlide>
        <SwiperSlide><img src={slide04} alt='clipping Path'  className='rounded-lg '/></SwiperSlide>
        <SwiperSlide><img src={slide05} alt='clipping Path'  className='rounded-lg '/></SwiperSlide>
        <SwiperSlide><img src={slide06} alt='clipping Path'  className='rounded-lg '/></SwiperSlide>
   
        
      
      
        <div className="autoplay-progress " slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
     </Swiper>
    );
};

export default Slider;



