import React from "react";

import "../css/write_form.css";

const QnaView = () => {
  return (
    <div className="board-detail">
      <div className="board-detail-container">
        <div className="board-detail-main">
          <div className="board-d">
            <div className="board-d-title">제목</div>
            <div className="board-title-input"></div>
          </div>
          <div className="board-d board-content">
            <div className="board-d-content"></div>
          </div>
          <div className="listBtn">
            <button>목록으로 돌아가기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QnaView;
