import React from "react";
import "../css/list_form.css";

const BoardListForm = () => {
  return (
    <>
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
        <div className="board-container">
          <div className="board-top">
            <h3></h3>
            <span>배송, 상품, 기타</span>
          </div>
          <div className="write-btn">
            <button>글쓰기</button>
          </div>

          <table>
            <thead>
              <tr className="board-thead">
                <th width="50">번호</th>
                <th>제목</th>
                <th width="100">작성자</th>
                <th width="100">작성일</th>
              </tr>
            </thead>
            <tbody>
              <tr className="board-tbody">
                <td className="board-num">번호</td>
                <td className="board-title">제목</td>
                <td className="board-name">작성자</td>
                <td className="board-date">작성일</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default BoardListForm;
