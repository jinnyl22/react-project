import React from "react";
import { Link } from "react-router-dom";

const AuthSideList = () => {
  return (
    <div>
      <div className="side-box">
        <div className="notice-box">
          <Link to="/notice">
            <span>결제 내역 관리</span>
          </Link>
        </div>
        <div className="board-box">
          <Link to="/board">
            <span>상품 관리</span>
          </Link>
        </div>
        <div className="board-box">
          <Link to="/board">
            <span>회원 관리</span>
          </Link>
        </div>
        <div className="board-box">
          <Link to="/board">
            <span>공지사항 관리</span>
          </Link>
        </div>
        <div className="board-box">
          <Link to="/board">
            <span>문의사항 관리</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthSideList;
