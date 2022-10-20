import React from "react";
import "../css/side_list.css";
import { Link } from "react-router-dom";

const SideList = () => {
  return (
    <div>
      <div className="side-box">
        <div className="notice-box">
          <Link to="/notice">
            <span>공지사항</span>
          </Link>
        </div>
        <div className="board-box">
          <Link to="/board">
            <span>문의사항</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideList;
