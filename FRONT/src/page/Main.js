import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../css/main_slide.css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
import { slide1, slide2, slide3, slide4, slide5, slide6 } from "../img";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Swiper pagination={true} navigation={true} modules={[Pagination, Navigation]} className="mySwiper">
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
      <div className="section just1day">
        <div className="inner-cont">
          <div className="ftLt">
            <h2>오늘의 특가</h2>
            <p className="sale">
              <strong>~50%</strong>
            </p>
            <p className="time">남은 시간</p>
          </div>
          <div className="items">
            <ul>
              <li>
                <Link>
                  <div className="thumbnail"></div>
                  <div className="desc">
                    <p className="name">오늘 단 하루 특가</p>
                    <div className="price"></div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
