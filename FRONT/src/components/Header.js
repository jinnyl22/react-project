import React from "react";
import { Link } from "react-router-dom";
import { logo, searchimg } from "../img";

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="relative w-1050px h-100px my-0 mx-auto tracking-tighter">
          <div className="absolute h-37px right-0 flex items-center">
            <Link to="/join">회원가입</Link>
            <Link to="/login">로그인</Link>
            <div className="top-bar"></div>
            <Link to="/mypage">마이페이지</Link>
            <Link to="/auth">관리자 페이지</Link>
            <div className="top-bar"></div>
            <div className="cs">
              <Link to="/board">
                고객센터
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
              <button>FRANK</button>
            </div>
            <div className="gnb-bar">
              <div className="search-bar">
                <input type="text" placeholder="검색어를 입력해주세요" />
                <img src={searchimg} alt="돋보기" />
              </div>
            </div>
            <div className="icon-box">
              <div className="icon">
                <div className="locationB"></div>
                <div className="heartB"></div>
                <div className="cartB"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-bottom">
          <div className="bottom">
            <div className="lnb">
              <ul>
                <li>PRODUCTS</li>
                <li>BEST</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
