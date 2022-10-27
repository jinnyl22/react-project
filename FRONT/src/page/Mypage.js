import React from "react";
import "../css/mypage.css";
import { p_water } from "../img";

const Mypage = () => {
  return (
    <div>
      <div className="mypage-container">
        <div className="mypage-box">
          <div className="mypage-top">
            <div className="mypage-top-l">
              <div className="mypage-id">
                <span>1 Lv. </span>
                <span className="my-id">frank</span>
              </div>
              <div className="mypage-point">
                <span>point : </span>
                <span>2000</span>
              </div>
            </div>
            <div className="mypage-top-r" />
          </div>
          <div className="mypage-bor-bot"></div>
          <div className="mypage-bottom">
            <div className="mypage-info">
              <span className="mypage-name">이름</span>
              <span className="my">후랑크</span>
            </div>
            <div className="mypage-bor-bot"></div>
            <div className="mypage-info">
              <span className="mypage-email">이메일</span>
              <span className="my">frank@naver.com</span>
            </div>
            <div className="mypage-bor-bot"></div>
            <div className="mypage-info">
              <span className="mypage-phone">전화번호</span>
              <span className="my">010 0000 0000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mypage;
