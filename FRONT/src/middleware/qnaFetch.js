import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const qnaWriteFetch = createAsyncThunk("qnaWrite/create", async (create) => {
  const qnaWriteFetchResult = await axios.post("http://localhost:80/board/write", { create });
  console.log(qnaWriteFetchResult.data);
  alert(qnaWriteFetchResult.data);
  return qnaWriteFetchResult.data;
});

export { qnaWriteFetch };
