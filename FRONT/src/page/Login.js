import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../css/join.css";

import { loginFetch } from "../middleware/loginFetch";

const Login = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();

  const isLogin = useSelector((state) => state.login.isLogin);

  const idInput = useRef();
  const pwInput = useRef();

  // console.log(idInput.current.value);
  // console.log(pwInput.current.value);
  const loginHandler = () => {
    idInput.current.value !== "" && pwInput.current.value !== "" ? dispatch(loginFetch({ id: idInput.current.value, pw: pwInput.current.value })) : alert("아이디랑 비밀번호를 입력해주세요.");
  };

  useEffect(() => {
    if (isLogin === true) nav("/");
  }, [isLogin]);

  return (
    <div>
      <div className="j-container">
        <div className="j-top">
          <div className="join">로그인</div>
          <div className="j-line" />
        </div>
        <div className="j-middle">
          <div className="middle-id">
            <label>아이디</label>
            <input
              ref={idInput}
              onChange={(e) => {
                idInput.value = e.target.value;
              }}
              type="text"
            />
            <div className="j-blank"></div>
          </div>
          <div className="middle-pw">
            <label>비밀번호</label>
            <input
              ref={pwInput}
              onChange={(e) => {
                pwInput.value = e.target.value;
              }}
              type="password"
            />
            <div className="j-blank"></div>
          </div>
        </div>
        <div className="join-bt">
          <button onClick={loginHandler}>로그인</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
