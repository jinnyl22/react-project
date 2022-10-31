import React from "react";
import "../css/join.css";
// import Swal from "sweetalert2";

const Join = () => {
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
            <input type="text" placeholder="이름을 입력해주세요" />
            <div className="j-blank"></div>
          </div>
          <span className="check h-6 text-red-500 text-sm" />
          <div className="middle-id">
            <label>아이디</label>
            <input type="text" placeholder="아이디를 입력해주세요" />
            <div className="j-btn-wrap">
              <button>중복확인</button>
            </div>
          </div>
          <div className="middle-pw">
            <label>비밀번호</label>
            <input type="password" placeholder="비밀번호를 입력해주세요" />
            <div className="j-blank"></div>
          </div>
          <div className="middle-pw-check">
            <label>비밀번호 확인</label>
            <input type="password" placeholder="비밀번호를 한번 더 입력해주세요" />
            <div className="j-blank"></div>
          </div>
          <div className="middle-pw-check">
            <label>휴대폰 번호</label>
            <input type="text" placeholder="휴대폰 번호를 입력해주세요" />
            <div className="j-blank"></div>
          </div>
          <div className="middle-pw-check">
            <label>이메일</label>
            <input type="text" placeholder="이메일을 입력해주세요" />
            <div className="j-btn-wrap">
              <button>인증하기</button>
            </div>
          </div>
          <div className="middle-pw-check">
            <label>인증번호</label>
            <input type="text" placeholder="인증번호를 입력해주세요" />
            <div className="j-btn-wrap">
              <button>인증확인</button>
            </div>
          </div>
        </div>
        <div className="join-bt">
          <button>가입하기</button>
        </div>
      </div>
    </div>
  );
};

export default Join;
