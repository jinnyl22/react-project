import React, { useRef, useEffect, useState } from "react";
import { ContentFn } from "../redux/middleware";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import "../css/write_form.css";

const QnaWrite = () => {
  const content = useSelector((state) => state.content);

  const id = useParams();
  console.log(id);
  const [mycontent, setContent] = useState();
  const nav = useNavigate();

  useEffect(() => {
    console.log(content[0]);
    if (id.idx) {
      console.log("dsfsd");
      setContent(content[id.idx]);
    } else {
      setContent({ title: "", text: "", user: "" });
    }
  }, [content]);

  const dispatch = useDispatch();
  const title = useRef();
  const text = useRef();
  const user = useRef();

  const writeFin = (index) => {
    // console.log(title.current.value);
    // console.log(text.current.value);
    if (title.current.value == "") {
      alert("제목 입력");
    }
    if (text.current.value == "") {
      alert("내용 입력");
    }
    if (user.current.value == "") {
      alert("작성자 입력");
    }
    if (id.idx) {
      dispatch(ContentFn.UpdateContent(title.current.value, text.current.value, index));
    } else {
      dispatch(ContentFn.CreateContent(title.current.value, text.current.value, user.current.value));
    }
    nav("/qna");
  };

  return (
    <div className="board-detail">
      <div className="board-detail-container">
        <div className="board-detail-main">
          <div className="board-d">
            <div className="board-d-title">제목</div>
            <input ref={title} name="qnaTitle" type="text" placeholder="제목을 작성해주세요" className="board-title-input" defaultValue={mycontent?.title} />
          </div>
          <div className="board-d board-content">
            <textarea ref={text} name="qnaContent" className="board-d-content" placeholder="내용을 입력해주세요" defaultValue={mycontent?.text} />
          </div>
          <label>작성자</label>
          <input ref={user} defaultValue={mycontent?.user} />
          <div className="listBtn">
            <button
              onClick={() => {
                writeFin(mycontent.id);
              }}
              className="board-d-listbtn"
            >
              등록하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QnaWrite;
