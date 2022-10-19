import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../css/main_slide.css";
import "../css/main.css";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from "swiper";
import { slide1, slide2, slide3, slide4, slide5, slide6, grip, keyring, sticker } from "../img";
import { Link } from "react-router-dom";

import { Timer } from "../components";

const Main = () => {
  return (
    <>
      <div>
        <Swiper autoplay={{ delay: 1000 }} loop={true} pagination={true} navigation={true} modules={[Pagination, Navigation, Autoplay]} className="mySwiper">
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
                <strong>~20%</strong>
              </p>
              <p className="time">
                남은 시간
                <Timer />
              </p>
            </div>
            <div className="items">
              <ul>
                <li>
                  <Link>
                    <div className="thumbnail">
                      <img src={grip} alt="그립톡" />
                    </div>
                    <div className="desc">
                      <p className="name">
                        오늘 단 하루 특가
                        <br />
                        후랑크 그립톡
                      </p>
                      <div className="price">
                        <span className="discount color-red">~20%</span>
                        <span className="sum">6,900원</span>
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link>
                    <div className="thumbnail">
                      <img src={keyring} alt="키링" />
                    </div>
                    <div className="desc">
                      <p className="name">
                        최저가 세일
                        <br />
                        후랑크 아크릴 키링
                      </p>
                      <div className="price">
                        <span className="discount color-red">~20%</span>
                        <span className="sum">9,900원</span>
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link>
                    <div className="thumbnail">
                      <img src={sticker} alt="스티커" />
                    </div>
                    <div className="desc">
                      <p className="name">
                        오늘 단 하루 특가
                        <br />
                        후랑크 리무버블 스티커
                      </p>
                      <div className="price">
                        <span className="discount color-red">~20%</span>
                        <span className="sum">2,500원</span>
                      </div>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
