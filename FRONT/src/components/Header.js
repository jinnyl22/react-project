import React from "react";
import { Link } from "react-router-dom";
import { logo, searchimg, header_hand, header_body } from "../img";
import "../css/header.css";
import { useSelector } from "react-redux";

const Header = () => {
  const isAdmin = useSelector((state) => state.login.admin);
  const isLogin = useSelector((state) => state.login.isLogin);
  const userId = useSelector((state) => state.login.id);

  return (
    <div>
      <div className="header">
        <div className="container">
          <img src={header_hand} alt="후랑크 손" className="frank-hand" />
          <div className="top">
            {isLogin == true ? (
              isAdmin == 1 ? (
                <>
                  <div>{userId}</div>
                  <div className="top-bar"></div>
                  <Link to="/auth">관리자 페이지</Link>
                  {/* <Link to="/user/mypage">마이페이지</Link> */}
                  {/* <div className="top-bar"></div>
            <Link to="/notice">고객센터</Link> */}
                  <div className="top-bar"></div>
                </>
              ) : (
                <>
                  <div>{userId}</div>
                  <div className="top-bar"></div>
                  {/* <Link to="/auth">관리자 페이지</Link> */}
                  <Link to="/user/mypage">마이페이지</Link>
                  {/* <div className="top-bar"></div>
            <Link to="/notice">고객센터</Link> */}
                  <div className="top-bar"></div>
                </>
              )
            ) : (
              <>
                <Link to="/user/join">회원가입</Link>
                <div className="top-bar"></div>
                <Link to="/user/login">로그인</Link>
                {/* <div className="top-bar"></div> */}
                {/* <Link to="/auth">관리자 페이지</Link>
                <Link to="/user/mypage">마이페이지</Link> */}
                {/* <div className="top-bar"></div>
            <Link to="/notice">고객센터</Link> */}
                <div className="top-bar"></div>
              </>
            )}

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
                <li>
                  <Link to="/shop/all">전체상품</Link>
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
