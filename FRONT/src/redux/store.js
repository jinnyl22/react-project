import { applyMiddleware, createStore } from "redux";
// redux 모듈 저장소 만드는 함수 createStore

// 미들웨어 thun를 불러온다
import thunk from "redux-thunk";
import reducer from "./reducer";

// 여기에 매개변수로 reducer랑 미들웨어를 전달해준다.
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
