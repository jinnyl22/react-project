import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../css/main_slide.css";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from "swiper";
import { slide1, slide2, slide3, slide4, slide5, slide6 } from "../img";

const SlideTop = () => {
  return (
    <div>
      <Swiper autoplay={{ delay: 4000 }} loop={true} pagination={true} navigation={true} modules={[Pagination, Navigation, Autoplay]} className="mySwiper">
        <SwiperSlide>
          <img src={slide1} alt="슬라이드1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="슬라이드2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="슬라이드3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="슬라이드4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="슬라이드5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide6} alt="슬라이드6" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SlideTop;
