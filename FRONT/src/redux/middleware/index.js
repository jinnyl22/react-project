import axios from "axios";
// 요청과 응답 처리를 위해 axios 사용
// get, post 등등

// 여기가 action creator!!

// 글 조회
function GetContent(index, count) {
  return async (dispatch, getState) => {
    const qnaList = await axios({
      method: "post",
      url: "http://localhost:8000/qna",
      data: {
        // 페이지 네이션 인덱스
        index,
        // 글의 개수
        count,
      },
    });
    dispatch({ type: "GETCONTENTLIST", payload: qnaList.data });
  };
}

// 글 생성
function CreateContent(title, text, user) {
  return async (dispatch, getState) => {
    const qnaCreate = await axios({
      method: "post",
      url: "http://localhost:8000/qna/write",
      data: {
        title,
        text,
        user,
      },
    });
    console.log(qnaCreate);
  };
}

// 글 삭제
function DelContent(num) {
  return async (dispatch, getState) => {
    await axios({
      method: "post",
      url: "http://localhost:8000/qna/delete",
      data: {
        num,
      },
    });
    const { index, count } = getState();
    const qnaList = await axios({
      method: "post",
      url: "http://localhost:8000/qna",
      data: {
        // 페이지 네이션 인덱스
        index,
        // 글의 개수
        count,
      },
    });
    dispatch({ type: "GETCONTENTLIST", payload: qnaList.data });
  };
}

// 글 수정
function UpdateContent() {}

export const ContentFn = { GetContent, CreateContent, DelContent, UpdateContent };
