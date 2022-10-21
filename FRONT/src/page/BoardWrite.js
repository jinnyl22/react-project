import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import "../css/write_form.css";

const BoardWrite = () => {
  const nav = useNavigate();
  const location = useLocation();
  console.log(location.pathname.replace("/write", ""));
  return (
    <div className="board-detail">
      <div className="board-detail-container">
        <div className="board-detail-main">
          <div className="board-d">
            <div className="board-d-title">제목</div>
            <input type="text" placeholder="제목을 작성해주세요" className="board-title-input" />
          </div>
          <div className="board-d board-content">
            <textarea className="board-d-content" placeholder="내용을 입력해주세요" />
          </div>
          <div className="listBtn">
            <button
              className="board-d-listbtn"
              onClick={() => {
                nav(location.pathname.replace("/write", ""));
              }}
            >
              등록하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardWrite;
