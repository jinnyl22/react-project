import React from "react";
import { logo, searchimg, header_hand, header_body } from "../img";
import { Link } from "react-router-dom";
import "../css/header.css";
const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="container">
          <img src={header_hand} alt="후랑크 손" className="frank-hand" />
          <div className="top">
            <div></div>
            <div>관리자 페이지</div>
            {/* <Link to="/user/mypage">마이페이지</Link> */}
            <div className="top-bar"></div>
            <Link to="/user/join">회원가입</Link>
            <div className="top-bar"></div>
            <Link to="/user/login">로그인</Link>
            <div className="top-bar"></div>
            <div className="cs">
              <Link to="/notice">
                고객센터
                <span className="triangle"></span>
              </Link>
              <div className="dropdown-list">
                <Link to="/notice">공지사항</Link>
                <Link to="/qna">문의사항</Link>
              </div>
            </div>
          </div>
          <div className="middle">
            <div className="logo">
              <img src={logo} alt="대체 로고" />
            </div>
            <div className="gnb-bar">
              <div className="search-bar">
                <input type="text" placeholder="검색어를 입력해주세요" />
                <img src={searchimg} alt="돋보기" />
              </div>
            </div>
            {/* <div className="header-frank"> */}
            <div className="frank">
              <img src={header_body} alt="후랑크 몸" className="frank-body" />
            </div>
            {/* </div> */}
          </div>
        </div>
        <div className="header-bottom">
          <div className="bottom">
            <div className="lnb">
              <ul>
                <li>전체상품</li>
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
