import React from "react";

const AuthListForm = () => {
  return (
    <>
      <div className="board">
        <div className="side-box">
          <div className="notice-box auth-s-list">
            <div>
              <span>결제 내역 관리</span>
            </div>
          </div>
          <div className="board-box auth-s-list">
            <div>
              <span>상품 관리</span>
            </div>
          </div>
          <div className="board-box auth-s-list">
            <div>
              <span>회원 관리</span>
            </div>
          </div>
          <div className="board-box auth-s-list">
            <div>
              <span>공지사항 관리</span>
            </div>
          </div>
          <div className="board-box auth-s-list">
            <div>
              <span>문의사항 관리</span>
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
                <td className="board-num"></td>
                <td className="board-title"></td>
                <td className="board-name"></td>
                <td className="board-date"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AuthListForm;
