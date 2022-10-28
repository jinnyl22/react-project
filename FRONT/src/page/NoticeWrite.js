import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { qnaWriteFetch } from "../middleware/qnaFetch";

import "../css/write_form.css";

const BoardWrite = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const location = useLocation();
  // console.log(location.pathname.replace("/write", ""));

  const qnaSubmitHandler = (e) => {
    // e.preventDefault() -> 나중에 알아보기
    e.preventDefault();
    // console.log(e.target.qnaTitle.value);
    // console.log(e.target.qnaContent.value);
    const qnaTitle = e.target.qnaTitle.value;
    const qnaContent = e.target.qnaContent.value;

    dispatch(qnaWriteFetch({ qnaTitle, qnaContent }));
    nav(location.pathname.replace("/write", ""));
    // console.log(dis);
  };

  return (
    <div className="board-detail">
      <div className="board-detail-container">
        <div className="board-detail-main">
          <form onSubmit={qnaSubmitHandler}>
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
