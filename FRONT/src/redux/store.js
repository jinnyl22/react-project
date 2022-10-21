import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { NoticeListFormSlice, BoardListFormSlice } from "./boardFormSlice";

const rootReducer = combineReducers({
  noticeListForm: NoticeListFormSlice.reducer,
  boardListForm: BoardListFormSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
