import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { NoticeListFormSlice, BoardListFormSlice } from "./boardFormSlice";
import joinPassSlice from "./joinSlice";
import { loginSlice } from "./loginSlice";
// rtk에서 thunk 사용하려면 이렇게 import 해주고 아래의 store에 middleware: [thunk]를 내보내주어야한다!
// 안그러면 미들웨어에서 thunk 구문을 사용할 수 없음!
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  noticeListForm: NoticeListFormSlice.reducer,
  boardListForm: BoardListFormSlice.reducer,
  joinPass: joinPassSlice.reducer,
  login: loginSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
