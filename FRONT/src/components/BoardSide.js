import React from "react";
import "../css/list_form.css";

const BoardSide = () => {
  return (
    <div className="board">
      <div className="side-box">
        <div className="notice-box">
          <div>
            <span>공지사항</span>
          </div>
        </div>
        <div className="board-box">
          <div>
            <span>문의사항</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardSide;
