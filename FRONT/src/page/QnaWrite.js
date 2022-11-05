import React, { useRef } from "react";
import { ContentFn } from "../redux/middleware";
import { useDispatch } from "react-redux";

import "../css/write_form.css";

const QnaWrite = () => {
  const dispatch = useDispatch();
  const title = useRef();
  const text = useRef();
  const user = useRef();

  const writeFin = () => {
    // console.log(title.current.value);
    // console.log(text.current.value);
    if (title.current.value == "") {
      alert("제목 입력");
    }
    if (text.current.value == "") {
      alert("내용 입력");
    }
    if (user.current.value == "") {
      alert("작성자 입력");
    }
    dispatch(ContentFn.CreateContent(title.current.value, text.current.value, user.current.value));
  };

  return (
    <div className="board-detail">
      <div className="board-detail-container">
        <div className="board-detail-main">
          <div className="board-d">
            <div className="board-d-title">제목</div>
            <input ref={title} name="qnaTitle" type="text" placeholder="제목을 작성해주세요" className="board-title-input" />
          </div>
          <div className="board-d board-content">
            <textarea ref={text} name="qnaContent" className="board-d-content" placeholder="내용을 입력해주세요" />
          </div>
          <label>작성자</label>
          <input ref={user} />
          <div className="listBtn">
            <button onClick={writeFin} className="board-d-listbtn">
              등록하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QnaWrite;
