import React, { useRef } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slider.css";
import planet from "../../../../assets/images/planet.jpg";
import winter from "../../../../assets/images/winter.jpg";
import flood from "../../../../assets/images/flood.jpg";
import atim from "../../../../assets/images/atim.jpg";
import technical from "../../../../assets/images/technical.jpg";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Swiper, SwiperSlide } from "swiper/react";

const Slider = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 2000)}s`;
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
      <SwiperSlide>
        <img
          src={atim}
          alt="Raising and educating orphans"
          className="rounded-lg "
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={technical}
          alt="Technical education"
          className="rounded-lg "
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={winter}
          alt="Distribution of winter clothes"
          className="rounded-lg "
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src={flood}
          alt="Relief distribution to flood victims"
          className="rounded-lg "
        />
      </SwiperSlide>

      <SwiperSlide>
        <img src={planet} alt="Plantation program" className="rounded-lg " />
      </SwiperSlide>

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
