import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { BoardListForm } from "../redux/boardFormSlice";

// 글쓴 정보를 DB 저장
const qnaWriteFetch = createAsyncThunk("qnaWrite/create", async (create) => {
  const qnaWriteFetchResult = await axios.post("http://localhost:8000/board/write", create);
  console.log(qnaWriteFetchResult.data);
  alert(qnaWriteFetchResult.data);
  return qnaWriteFetchResult.data;
});

// thunk를 사용해서 dispatch하는 부분
function qnaListFetch(idx) {
  return async (dispatch, getState) => {
    const qnaListFetchResult = await axios.post("http://localhost:8000/board", { idx: idx });
    // 전체 글의 갯수를 받아온다
    const count = await axios.get("http://localhost:8000/board/setCount");
    //console.log(count);
    // qnaListFetchResult.data에 문의사항 글이 객체로 들어온다
    console.log(qnaListFetchResult.data);
    // BoardListForm 슬라이스에 글 객체를 dispatch 해준다
    dispatch(BoardListForm.listForm({ boardList: qnaListFetchResult.data, boardCount: count }));
    //
    // dispatch
  };
}

export { qnaWriteFetch, qnaListFetch };
