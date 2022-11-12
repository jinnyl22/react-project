import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import "../css/write_form.css";

const QnaView = () => {
  const content = useSelector((state) => state.content);
  const id = useParams();
  console.log(id);
  const [mycontent, setContent] = useState();
  const nav = useNavigate();

  useEffect(() => {
    console.log(content[0]);
    setContent(content[id.idx]);
  }, [content]);

  const changeWriteHandler = () => {
    nav("/qna/edit/" + id.idx);
  };

  return (
    <div className="board-detail">
      <div className="board-detail-container">
        <div className="board-detail-main">
          <div className="board-d">
            <div className="board-d-title">제목</div>
            <div className="board-title-input">{mycontent?.title}</div>
          </div>
          <div className="board-d board-content">
            <div className="board-d-content">{mycontent?.text}</div>
          </div>
          <div className="listBtn">
            <button>목록으로 돌아가기</button>
            <button onClick={changeWriteHandler} className="changeWrite">
              수정하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QnaView;
