const init = {
  content: [
    {
      num: 1,
      title: "",
      user: "",
      createAt: new Date().getTime(),
      count: 0,
    },
  ],
  index: 0,
  count: 10,
  // content: [
  //   {
  //     num: 1,
  //     title: "윰미 오늘 독감주사 맞은 썰 풀음",
  //     user: "윰",
  //     createAt: new Date().getTime(),
  //     count: 0,
  //   },
  // ],
};

//
function reducer(state = init, action) {
  // type : 행동의 이름
  // payload : 전달한 값을 받아옴
  const { type, payload } = action;
  console.log(action);
  switch (type) {
    // 상태 표시는 대문자로 하는게 통상적인 규칙
    case "CREATE":
      console.log("글 등록");
      // 스프레드 연산자를 사용해서 주소가 바뀌어야 값이 변했다고 인지하고 업데이트를 한다.
      return { ...state };
    case "GETCONTENTLIST":
      console.log("글 목록 조회");
      console.log("payload");
      // 스프레드 연산자를 사용해서 주소가 바뀌어야 값이 변했다고 인지하고 업데이트를 한다.
      return { ...state, content: payload };
    case "DELCONTENT":
      console.log("글 목록 삭제");
      console.log("payload");
      // 스프레드 연산자를 사용해서 주소가 바뀌어야 값이 변했다고 인지하고 업데이트를 한다.
      return { ...state };

    default:
      return state;
  }
}

export default reducer;
