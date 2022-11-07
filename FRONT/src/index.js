import React from "react";
import ReactDOM from "react-dom/client";
import "./input.css";
import App from "./App";
// 리액트에서 리덕스 편하게 사용하게 해주는 react-redux
// 저장소 설정은 redux에서 해준다!
import { Provider } from "react-redux";
// 라우터 분리를 위해서 사용
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
