import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { NoticeListFormSlice, BoardListFormSlice } from "./boardFormSlice";
import joinPassSlice from "./joinSlice";

const rootReducer = combineReducers({
  noticeListForm: NoticeListFormSlice.reducer,
  boardListForm: BoardListFormSlice.reducer,
  joinPass: joinPassSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
