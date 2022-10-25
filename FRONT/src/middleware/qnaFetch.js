import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { BoardListForm } from "../redux/boardFormSlice";

// 글쓴 정보를 DB 저장
const qnaWriteFetch = createAsyncThunk("qnaWrite/create", async (create) => {
  const qnaWriteFetchResult = await axios.post("http://localhost:80/board/write", { create });
  console.log(qnaWriteFetchResult.data);
  alert(qnaWriteFetchResult.data);
  return qnaWriteFetchResult.data;
});

function qnaListFetch(idx) {
  return async (dispatch, getState) => {
    const qnaListFetchResult = await axios.post("http://localhost:80/board/list", { idx });
    console.log(BoardListForm);
    dispatch(BoardListForm.listForm(qnaListFetchResult.data));
  };
}

// export const qnaListAction = { qnaListFetch };
export { qnaWriteFetch, qnaListFetch };
