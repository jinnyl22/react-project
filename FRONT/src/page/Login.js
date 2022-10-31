import React from "react";

const Login = () => {
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
            <input type="text" />
            <div className="j-blank"></div>
          </div>
          <div className="middle-pw">
            <label>비밀번호</label>
            <input type="password" />
            <div className="j-blank"></div>
          </div>
        </div>
        <div className="join-bt">
          <button>로그인</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
