import React from "react";
import { Link } from "react-router-dom";
import { logo, searchimg } from "../img";
import "../css/header.css";

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="container">
          <div className="top">
            <Link to="/join">회원가입</Link>
            <div className="top-bar"></div>
            <Link to="/login">로그인</Link>
            <div className="top-bar"></div>
            {/* <Link to="/mypage">마이페이지</Link> */}
            <Link to="/auth">관리자 페이지</Link>
            <div className="top-bar"></div>
            <Link to="/board">고객센터</Link>
            <div className="top-bar"></div>
            <div className="cs">
              <Link to="/board">
                장바구니
                <span className="triangle"></span>
              </Link>
              <div className="dropdown-list">
                <Link to="/notice">공지사항</Link>
                <Link to="/board">문의사항</Link>
              </div>
            </div>
          </div>
          <div className="middle">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="대체 로고" />
              </Link>
            </div>
            <div className="gnb-bar">
              <div className="search-bar">
                <input type="text" placeholder="검색어를 입력해주세요" />
                <img src={searchimg} alt="돋보기" />
              </div>
            </div>
          </div>
        </div>
        <div className="header-bottom">
          <div className="bottom">
            <div className="lnb">
              <ul>
                <li>
                  <Link to="/shop">전체상품</Link>
                </li>
                <li>베스트</li>
                <li>신상품</li>
                <li>할인특가</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
