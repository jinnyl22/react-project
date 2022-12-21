import React, { useEffect } from "react";
import "../css/list_form.css";
import { BoardSide } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { ContentFn } from "../redux/middleware";
import { useNavigate } from "react-router-dom";

const Qna = () => {
  const content = useSelector((state) => state.content);
  const nav = useNavigate();

  const dispatch = useDispatch();

  const onClicks = () => {
    dispatch(ContentFn.CreateContent());
  };
  // 글쓰기 페이지로 이동
  const qnaWriteHandler = () => {
    nav("/qna/write");
  };

  // 글 조회 페이지로 이동
  const qnaViewHandler = (id) => {
    nav("/qna/view/" + id);
  };

  useEffect(() => {
    console.log("ddfgdfk");
    dispatch(ContentFn.GetContent(0, 10));
  }, []);

  useEffect(() => {
    console.log(content);
  }, [content]);

  const deleteBtn = (index) => {
    dispatch(ContentFn.DelContent(index, 0, 10));
  };

  useEffect(() => {
    console.log("sdfs");
  }, [content]);

  // 배열 안에 주시할 값을 넣어준다.
  // 값이 변하면 재렌더 해줌!
  // useEffect(() => {
  //   console.log(content);
  // }, [content]);

  return (
    <>
      <div className="b">
        <BoardSide />
        <div className="board-container">
          <div className="board-top">
            <h3>문의사항</h3>
            <span>배송, 상품, 기타</span>
          </div>
          <div className="write-btn">
            <button onClick={qnaWriteHandler}>글쓰기</button>
          </div>

          <table>
            <thead>
              <tr className="board-thead">
                <th width="50">번호</th>
                <th>제목</th>
                <th width="100">작성자</th>
                <th width="100">작성일</th>
                <th width="50">조회수</th>
              </tr>
            </thead>
            <tbody>
              {/* {content.slice(offset, offset + limit).map(({ id, title, body }) => */}
              {content.map((el, idx) => (
                <>
                  <tr
                    onClick={() => {
                      qnaViewHandler(idx);
                    }}
                    className="board-tbody"
                    key={idx}
                  >
                    <td className="board-num">{idx + 1}</td>
                    <td className="board-title">{el.title}</td>
                    <td className="board-name">{el.user}</td>
                    <td className="board-date">{el.createdAt}</td>
                    <td className="board-date">{el.count}</td>
                  </tr>
                  <button
                    onClick={() => {
                      deleteBtn(el.id);
                    }}
                  >
                    삭제
                  </button>
                </>
              ))}
            </tbody>
          </table>
          <button onClick={onClicks}>테스트</button>
        </div>
      </div>
    </>
  );
};

export default Qna;
