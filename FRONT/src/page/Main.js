import React from "react";

import "../css/main.css";

import { grip, keyring, sticker } from "../img";
import { Link } from "react-router-dom";

import { Timer, SlideTop } from "../components";

const Main = () => {
  return (
    <div>
      <SlideTop />
      <div className="section just1day">
        <div className="inner-cont">
          <div className="ftLt">
            <h2>오늘의 특가</h2>
            <p className="sale">
              <strong>~20%</strong>
            </p>
            <div className="time">
              <span>남은 시간</span>
              <Timer />
            </div>
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
  );
};

export default Main;
