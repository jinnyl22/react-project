// 라우터 분리를 위해 불러옴
import { Route, Routes } from "react-router-dom";
import { Main, Login, Join, ShopAll, Mypage, QnaWrite, Authority, QnaView, QnA } from "./page";
import { Header, Footer } from "./components";
import Notice from "./page/Notice";

function App() {
  // const dispatch = useDispatch();

  // const onClicks = () => {
  //   dispatch({ type: "CREATE", payload: "윰미고양이" });
  // };

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
