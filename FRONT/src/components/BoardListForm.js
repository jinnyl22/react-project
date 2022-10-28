import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { qnaListFetch } from "../middleware/qnaFetch";
import "../css/list_form.css";

const BoardListForm = () => {
  const nav = useNavigate();
  const [boardList, setBoardList] = useState("공지사항");
  const [postUrl, setPostUrl] = useState("notice");
  const [page, setPage] = useState("0");

  const location = useLocation();
  const BoardListForm = useSelector((state) => state.boardListForm.list);
  const NoticeListForm = useSelector((state) => state.noticeListForm.list);
  // console.log(BoardListForm.length);
  const dispatch = useDispatch();

  // 페이지 네이션
  useEffect(() => {
    // qnaListFetch(0) 0일 때는 시퀄라이즈 offset이 0*10=0 맨 처음 등록한 글 부터 10개를 가져옴
    // 1이면 1*10=10 맨 처음 등록한 글 부터 10개를 제외하고 가져옴
    dispatch(qnaListFetch(0));
  }, []);

  useEffect(() => {
    if (location.pathname) {
      switch (location.pathname) {
        case "/notice":
          setBoardList("공지사항");
          setPostUrl("notice");
          break;
        case "/board":
          setBoardList("문의사항");
          setPostUrl("board");
          break;

        default:
          break;
      }
    }
  }, [location.pathname]);

  useEffect(() => {
    // BoardListForm에 문의사항에 쓴 글이 배열로 들어온다
    console.log(BoardListForm);
  }, [BoardListForm]);

  return (
    <>
      <div className="board">
        <div className="side-box">
          <div className="notice-box">
            <div
              onClick={() => {
                nav("/notice");
              }}
            >
              <span>공지사항</span>
            </div>
          </div>
          <div className="board-box">
            <div
              onClick={() => {
                nav("/board");
              }}
            >
              <span>문의사항</span>
            </div>
          </div>
        </div>
        <div className="board-container">
          <div className="board-top">
            <h3>{boardList}</h3>
            <span>배송, 상품, 기타</span>
          </div>
          <div className="write-btn">
            <Link to={`/${postUrl}/write`}>
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
            {/* 공지사항 목록 그려주는 부분 */}
            {location && location.pathname == "/notice"
              ? NoticeListForm.map((el, index) => {
                  console.log(el);
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
                })
              : // 문의사항 목록 그려주는 부분
                BoardListForm.map((el, index) => {
                  // 0번 부터 개수대로 들어옴
                  console.log(el);
                  // 태그를 반환해준다 (나중에 리스트를 컴포넌트로 만들어서 그려주면 훨씬 깔끔하다))
                  return (
                    <tbody key={index}>
                      <tr className="board-tbody">
                        {/* 글 번호 -> 0번 인덱스가 들어오니까 +1해줌 */}
                        <td className="board-num">{index + 1}</td>
                        <td className="board-title">
                          {/* Link의 url에 인덱스를 넣어주면 0번 일때 0번 글 보여준다! */}
                          {/* 글 제목 -> el에는 DB에서 가져온 글이 들어오는데 그 안의 title 컬럼에 접근해서 가져온다 */}
                          <Link to={"/board/view/" + index}>{el.title}</Link>
                        </td>
                        {/* 작성자 */}
                        <td className="board-name">{el.userId}</td>
                        {/* 작성일, 시간 */}
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
