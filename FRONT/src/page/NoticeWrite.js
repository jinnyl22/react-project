import React from "react";

import "../css/write_form.css";

const BoardWrite = () => {
  return (
    <div className="board-detail">
      <div className="board-detail-container">
        <div className="board-detail-main">
          <form>
            <div className="board-d">
              <div className="board-d-title">제목</div>
              <input name="qnaTitle" type="text" placeholder="제목을 작성해주세요" className="board-title-input" />
            </div>
            <div className="board-d board-content">
              <textarea name="qnaContent" className="board-d-content" placeholder="내용을 입력해주세요" />
            </div>
            <div className="listBtn">
              <button type="submit" className="board-d-listbtn">
                등록하기
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BoardWrite;
