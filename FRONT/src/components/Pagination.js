import React from "react";

const Pagination = () => {
  // props로 전체 갯수를 받아옴
  // 전체갯수 받아오는 함수 작성
  // 0보다 작아졌을 때 넘어가지 않도록 예외처리
  // 전체 갯수보다 커졌을 때 넘어가지 않도록 예외처리

  return (
    <div>
      <div className="board-pagenation">
        <div className="board-page-num">1</div>
      </div>
    </div>
  );
};

export default Pagination;