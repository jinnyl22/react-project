import { createSlice } from "@reduxjs/toolkit";

const NoticeListFormSlice = createSlice({
  name: "noticeListForm",
  initialState: {
    list: [{ title: "게시판 제목" }],
  },
  reducers: {
    listForm: (state, action) => {
      state.list = state.list.concat(action.payload);
    },
  },
});

const BoardListFormSlice = createSlice({
  name: "boardListForm",
  initialState: {
    list: [{ title: "게시판 제목" }],
  },
  reducers: {
    listForm: (state, action) => {
      state.list = state.list.concat(action.payload);
    },
  },
});

export { BoardListFormSlice, NoticeListFormSlice };

export const { BoardListForm } = BoardListFormSlice.actions;
export const { NoticeListForm } = NoticeListFormSlice.actions;
