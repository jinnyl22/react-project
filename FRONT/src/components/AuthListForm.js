import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthListForm = () => {
  const location = useLocation();
  const nav = useNavigate();
  const [list, setList] = useState([]);
  const sideList = useRef("결제 내역 관리");
  const postUrl = useRef("notice");

  const BoardListForm = useSelector((state) => state.boardListForm.list);
  const NoticeListForm = useSelector((state) => state.noticeListForm.list);

  // let user = { title: "", content: "", userName: userName, registDate: "2022 - 10 - 11" };
  useEffect(() => {
    setList(NoticeListForm);
  }, []);

  return (
    <>
      <div className="board">
        <div className="side-box">
          <div className="notice-box auth-s-list">
            <div
              onClick={() => {
                sideList.current = "결제 내역 관리";
                postUrl.current = "/auth/paym";
                setList(NoticeListForm);
                nav("/auth/paym");
              }}
            >
              <span>결제 내역 관리</span>
            </div>
          </div>
          <div className="board-box auth-s-list">
            <div
              onClick={() => {
                sideList.current = "상품 관리";
                postUrl.current = "/auth/prodm";
                setList(BoardListForm);
                nav("/auth/prodm");
              }}
            >
              <span>상품 관리</span>
            </div>
          </div>
          <div className="board-box auth-s-list">
            <div
              onClick={() => {
                sideList.current = "회원 관리";
                postUrl.current = "/auth/userm";
                setList(BoardListForm);
                nav("/auth/userm");
              }}
            >
              <span>회원 관리</span>
            </div>
          </div>
          <div className="board-box auth-s-list">
            <div
              onClick={() => {
                sideList.current = "공지사항 관리";
                postUrl.current = "/auth/nm";
                setList(BoardListForm);
                nav("/auth/nm");
              }}
            >
              <span>공지사항 관리</span>
            </div>
          </div>
          <div className="board-box auth-s-list">
            <div
              onClick={() => {
                sideList.current = "문의사항 관리";
                postUrl.current = "/auth/qna";
                setList(BoardListForm);
                nav("/auth/qna");
              }}
            >
              <span>문의사항 관리</span>
            </div>
          </div>
        </div>
        <div className="board-container">
          <div className="board-top">
            <h3>{sideList.current}</h3>
            <span>배송, 상품, 기타</span>
          </div>
          <div className="write-btn">
            <Link to={`/${postUrl.current}/write`}>
              <button>글쓰기</button>
            </Link>
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
            {/* 반복문 돌면서 그려주게 만드는 것! */}
            {list.map((el, index) => {
              console.log(index);
              // 태그를 반환해준다 (나중에 리스트를 컴포넌트로 만들어서 그려주면 훨씬 깔끔하다))
              return (
                <tbody key={index}>
                  <tr className="board-tbody">
                    <td className="board-num">{index + 1}</td>
                    <td className="board-title">
                      <Link to={"/board/detail/" + el.num}>{el.title}</Link>
                    </td>
                    <td className="board-name">{el.userName}</td>
                    <td className="board-date">{el.registDate}</td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
};

export default AuthListForm;
