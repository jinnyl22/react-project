import React from "react";
import "../css/join.css";
import { useState } from "react";
import { JoinFetch, checkFetch } from "../middleware/JoinFetch";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Join = () => {
  const dispatch = useDispatch();
  const [joinValues, setJoinValues] = useState({
    userName: "",
    userId: "",
    userPw: "",
    pwCheck: "",
    userPhone: "",
    userEmail: "",
  });

  const nameInputHandler = (e) => {
    setJoinValues({ ...joinValues, userName: e.target.value });
  };
  const idInputHandler = (e) => {
    setJoinValues({ ...joinValues, userId: e.target.value });
  };
  const pwInputHandler = (e) => {
    setJoinValues({ ...joinValues, userPw: e.target.value });
  };
  const pwCheckInputHandler = (e) => {
    setJoinValues({ ...joinValues, pwCheck: e.target.value });
  };
  const phoneInputHandler = (e) => {
    setJoinValues({ ...joinValues, userPhone: e.target.value });
  };
  const emailInputHandler = (e) => {
    setJoinValues({ ...joinValues, userEmail: e.target.value });
  };

  return (
    <div>
      <div className="j-container">
        <div className="j-top">
          <div className="join">회원가입</div>
          <div className="j-line" />
        </div>
        <div className="j-middle">
          <div className="middle-pw">
            <label>이름</label>
            <input onChange={nameInputHandler} type="text" placeholder="이름을 입력해주세요" />
            <div className="j-blank"></div>
          </div>
          <div className="middle-id">
            <label>아이디</label>
            <input onChange={idInputHandler} type="text" placeholder="아이디를 입력해주세요" />
            <div className="j-btn-wrap">
              <button
                onClick={() => {
                  dispatch(checkFetch({ userId: joinValues.userId }));
                }}
              >
                중복확인
              </button>
            </div>
          </div>
          <div className="middle-pw">
            <label>비밀번호</label>
            <input onChange={pwInputHandler} type="text" placeholder="비밀번호를 입력해주세요" />
            <div className="j-blank"></div>
          </div>
          <div className="middle-pw-check">
            <label>비밀번호 확인</label>
            <input onChange={pwCheckInputHandler} type="text" placeholder="비밀번호를 한번 더 입력해주세요" />
            <div className="j-blank"></div>
          </div>
          <div className="middle-pw-check">
            <label>휴대폰 번호</label>
            <input onChange={phoneInputHandler} type="text" placeholder="휴대폰 번호를 입력해주세요" />
            <div className="j-blank"></div>
          </div>
          <div className="middle-pw-check">
            <label>이메일</label>
            <input onChange={emailInputHandler} type="text" placeholder="이메일을 입력해주세요" />
            <button onClick={() => {}}>인증하기</button>
          </div>
          <div className="middle-pw-check">
            <label>인증번호</label>
            <input onChange={phoneInputHandler} type="text" placeholder="인증번호를 입력해주세요" />
            <button onClick={() => {}}>인증확인</button>
          </div>
        </div>
        <div className="join-bt">
          <button
            onClick={() => {
              // (1)회원가입창에서 입력한 데이터를 보내준다
              console.log(joinValues);
              dispatch(JoinFetch(joinValues));
            }}
          >
            가입하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Join;
