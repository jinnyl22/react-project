import React from "react";
import { Link } from "react-router-dom";
import { ListForm, SideList } from "../components";
import "../css/board.css";

const Notice = () => {
  return (
    <div>
      <div className="notice-page">
        <SideList />
        <div className="board">
          <div className="board-container">
            <div className="board-top">
              <h3>공지사항</h3>
              <span>frank의 소식과 이벤트를 만나보세요!</span>
            </div>
            <div className="write-btn">
              <Link to="/notice/write">
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

export default Notice;
