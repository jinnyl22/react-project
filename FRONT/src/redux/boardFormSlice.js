import { createSlice } from "@reduxjs/toolkit";

const NoticeListFormSlice = createSlice({
  name: "noticeListForm",
  initialState: {
    list: [{ title: "게시판 제목" }],
  },
  reducers: {
    listForm: (state, action) => {
      state.list = action.payload;
    },
  },
});

const BoardListFormSlice = createSlice({
  name: "boardListForm",
  initialState: {
    list: [],
    // 글의 전체 갯수를 스토어에 저장시켜줌
    count: 0,
  },
  reducers: {
    listForm: (state, action) => {
      state.list = action.payload;
    },
  },
});

// const BoardContentsSlice = createSlice({
//   name : "BoardContents",
//   initialState : {

//   }
// })

export { BoardListFormSlice, NoticeListFormSlice };

export const BoardListForm = BoardListFormSlice.actions;
export const NoticeListForm = NoticeListFormSlice.actions;
