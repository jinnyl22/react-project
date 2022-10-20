import React from "react";
import { Link } from "react-router-dom";
import { ListForm, SideList } from "../components";
import "../css/board.css";

const Board = () => {
  return (
    <div>
      <div className="notice-page">
        <SideList />
        <div className="board">
          <div className="board-container">
            <div className="board-top">
              <h3>문의사항</h3>
              <span>배송, 상품, 기타</span>
            </div>
            <div className="write-btn">
              <Link to="/board/write">
                <button>글쓰기</button>
              </Link>
            </div>
            <ListForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
