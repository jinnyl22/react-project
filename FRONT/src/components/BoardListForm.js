import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { qnaListFetch } from "../middleware/qnaFetch";
import "../css/list_form.css";

const BoardListForm = () => {
  const nav = useNavigate();
  const [list, setList] = useState([]);
  const boardList = useRef("공지사항");
  const postUrl = useRef("notice");

  const BoardListForm = useSelector((state) => state.boardListForm.list);
  const NoticeListForm = useSelector((state) => state.noticeListForm.list);

  const dispatch = useDispatch();

  // let user = { title: "", content: "", userName: userName, registDate: "2022 - 10 - 11" };
  useEffect(() => {
    setList(NoticeListForm);
    dispatch(qnaListFetch(0));
  }, []);

  useEffect(() => {
    console.log(BoardListForm);
  }, [BoardListForm]);

  return (
    <>
      <div className="board">
        <div className="side-box">
          <div className="notice-box">
            <div
              onClick={() => {
                boardList.current = "공지사항";
                postUrl.current = "notice";
                setList(NoticeListForm);
                nav("/notice");
              }}
            >
              <span>공지사항</span>
            </div>
          </div>
          <div className="board-box">
            <div
              onClick={() => {
                boardList.current = "문의사항";
                postUrl.current = "board";
                setList(BoardListForm);
                nav("/board");
              }}
            >
              <span>문의사항</span>
            </div>
          </div>
        </div>
        <div className="board-container">
          <div className="board-top">
            <h3>{boardList.current}</h3>
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
                      <Link to={"/board/view/" + index}>{el.title}</Link>
                    </td>
                    <td className="board-name">{el.userId}</td>
                    <td className="board-date">{el.createdAt}</td>
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

export default BoardListForm;
