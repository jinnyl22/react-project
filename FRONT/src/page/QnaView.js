import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import "../css/write_form.css";

const QnaView = () => {
  const BoardListForm = useSelector((state) => state.boardListForm.list);
  useEffect(() => {
    console.log(BoardListForm);
  }, [BoardListForm]);
  const params = useParams();
  console.log(params);
  return (
    <div className="board-detail">
      <div className="board-detail-container">
        <div className="board-detail-main">
          <div className="board-d">
            <div className="board-d-title">제목</div>
            <div className="board-title-input">{BoardListForm && BoardListForm[params.idx]?.title}</div>
          </div>
          <div className="board-d board-content">
            <div className="board-d-content">{BoardListForm && BoardListForm[params.idx]?.content}</div>
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
