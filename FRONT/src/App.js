// 라우터 분리를 위해 불러옴
import { Route, Routes } from "react-router-dom";
import { Main, Login, Join, ShopAll, Mypage, QnaWrite, Authority, QnaView, QnA } from "./page";
import { Header, Footer } from "./components";
import Notice from "./page/Notice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ContentFn } from "./redux/middleware";

function App() {
  // const dispatch = useDispatch();
  const dispatch = useDispatch();
  // const onClicks = () => {
  //   dispatch({ type: "CREATE", payload: "윰미고양이" });
  // };

  // 아래와 같이 적어야 App.js를 거쳐가면서 페이지를 열 때 바로 글 10개를 들고와서 글 내용 조회페이지에서 새로고침을 해도 들고 있어서 컨텐츠가 보여진다!!
  useEffect(() => {
    console.log("ddfgdfk");
    dispatch(ContentFn.GetContent(0, 10));
  }, []);
  return (
    <div className="App">
      <Header />
      {/* <button onClick={onClicks}>동작</button> */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/mypage" element={<Mypage />} />
        <Route path="/user/join" element={<Join />} />
        <Route path="/shop/all" element={<ShopAll />} />
        <Route path="/qna" element={<QnA />} />
        <Route path="/notice" element={<Notice />} />
        {/* <Route path="/notice/write" element={<BoardWrite />} /> */}
        <Route path="/qna/write" element={<QnaWrite />} />
        {/* prams로 idx를 써주면 자동으로 인덱스 번호가 들어감 */}
        <Route path="/qna/view/:idx" element={<QnaView />} />
        {/* 글 수정하는 페이지 */}
        <Route path="/qna/edit/:idx" element={<QnaWrite />} />
        {/* <Route path="/auth" element={<Authority />} /> */}
        {/* <Route path="/auth/qna" element={<Authority />} /> */}
        {/* <Route path="/auth/nm" element={<Authority />} />
        <Route path="/auth/paym" element={<Authority />} />
        <Route path="/auth/prodm" element={<Authority />} />
        <Route path="/auth/userm" element={<Authority />} /> */}
      </Routes>
    </div>
  );
}

export default App;
