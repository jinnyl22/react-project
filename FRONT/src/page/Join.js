import React, { useEffect } from "react";
import "../css/join.css";
import { useState } from "react";
import { JoinFetch, idCheckFetch, emailCheckFetch } from "../middleware/JoinFetch";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { joinPassAction } from "../redux/joinSlice";
// import Swal from "sweetalert2";

const Join = () => {
  const nav = useNavigate();

  const authNumber = useSelector((state) => state.joinPass.authNum);
  // console.log(authNumber);
  const joinPassId = useSelector((state) => state.joinPass.idCheck);
  const joinPassPw = useSelector((state) => state.joinPass.pwCheck);
  const joinPassEmail = useSelector((state) => state.joinPass.emailCheck);

  const dispatch = useDispatch();
  const [joinValues, setJoinValues] = useState({
    userName: "",
    userId: "",
    userPw: "",
    pwCheck: "",
    userPhone: "",
    userEmail: "",
    userAuthNum: "",
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
  // 비밀번호랑 비밀번호 확인이 같은지 확인해주는 곳
  const pwCheckInputHandler = (e) => {
    setJoinValues({ ...joinValues, pwCheck: e.target.value });
  };
  const phoneInputHandler = (e) => {
    setJoinValues({ ...joinValues, userPhone: e.target.value });
  };
  const emailInputHandler = (e) => {
    setJoinValues({ ...joinValues, userEmail: e.target.value });
  };
  const authNumInputHandler = (e) => {
    setJoinValues({ ...joinValues, userAuthNum: e.target.value });
  };

  // 아아디 중복확인을 눌렀을 때
  const idCheckHandler = () => {
    // 초기 값으로 빈값이 아닌 경우에 DB랑 조회하기!
    joinValues.userId !== "" ? dispatch(idCheckFetch({ id: joinValues.userId })) : alert("아이디를 입력해주세요");
  };

  // 인증번호 비교 체크 해주는 곳
  function authNumCheckHandler() {
    console.log(authNumber);
    console.log(joinValues.userAuthNum);
    if (authNumber === joinValues.userAuthNum) {
      dispatch(joinPassAction.emailNumCheck(true));
      alert("인증번호가 확인되었습니다.");
    } else alert("인증번호가 다릅니다. 다시 확인해주세요.");
  }

  console.log(joinPassId);
  console.log(joinPassPw);
  console.log(joinPassEmail);

  const joinPassHandler = () => {
    const keys = Object.keys(joinValues);
    if (joinValues.userPw !== "" && joinValues.pwCheck !== "") {
      if (joinValues.userPw === joinValues.pwCheck) {
        dispatch(joinPassAction.passwordCheck(true));
        for (let i = 0; i < keys.length; i++) {
          if (joinValues[keys[i]] === "") {
            return alert("모든 칸을 입력해주세요.");
          }
        }
        if (joinPassId && joinPassPw && joinPassEmail === true) {
          dispatch(JoinFetch(joinValues));
          alert("회원가입을 축하드립니다! 로그인 후 이용해주세요 :)");
          nav("/");
        } else alert("중복 확인 및 인증번호 확인요청");
      } else alert("비밀번호가 일치하지 않습니다. 다시 확인해주세요.");
    } else alert("비밀번호를 입력하세요.");
  };

  // function joinPassHandler() {
  //   console.log(joinPassId);
  //   console.log(joinPassPw);
  //   console.log(joinPassEmail);
  //   // (1)회원가입창에서 입력한 데이터를 보내준다
  //   // 값이 넘어가야 service 부분이 작동!
  //   if (joinValues !== "")
  //     if (joinValues.userPw === joinValues.pwCheck) {
  //       dispatch(joinPassAction.passwordCheck(true));
  //     } else if (joinPassId && joinPassPw && joinPassEmail === true) {
  //       alert("회원가입을 축하드립니다! 로그인 후 이용해주세요 :)");
  //       // nav("/");
  //     } else alert("비밀번호가 일치하지 않습니다. 다시 확인해주세요.");
  // }

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
          <span className="check h-6 text-red-500 text-sm" />
          <div className="middle-id">
            <label>아이디</label>
            <input onChange={idInputHandler} type="text" placeholder="아이디를 입력해주세요" />
            <div className="j-btn-wrap">
              <button onClick={idCheckHandler}>중복확인</button>
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
            <div className="j-btn-wrap">
              <button
                onClick={() => {
                  console.log(joinValues.userEmail);
                  dispatch(emailCheckFetch({ email: joinValues.userEmail }));
                }}
              >
                인증하기
              </button>
            </div>
          </div>
          <div className="middle-pw-check">
            <label>인증번호</label>
            <input onChange={authNumInputHandler} type="text" placeholder="인증번호를 입력해주세요" />
            <div className="j-btn-wrap">
              <button onClick={authNumCheckHandler}>인증확인</button>
            </div>
          </div>
        </div>
        <div className="join-bt">
          <button onClick={joinPassHandler}>가입하기</button>
        </div>
      </div>
    </div>
  );
};

export default Join;
