import { Route, Routes } from "react-router-dom";
import { Main, Login, Join, Shop, Board, Mypage, BoardWrite, Authority } from "./page";
import { Header, Footer } from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Mypage" element={<Mypage />} />
        <Route path="/join" element={<Join />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/board" element={<Board />} />
        <Route path="/notice" element={<Board />} />
        <Route path="/notice/write" element={<BoardWrite />} />
        <Route path="/board/write" element={<BoardWrite />} />
        <Route path="/auth" element={<Authority />} />
        <Route path="/auth/qna" element={<Authority />} />
        <Route path="/auth/nm" element={<Authority />} />
        <Route path="/auth/paym" element={<Authority />} />
        <Route path="/auth/prodm" element={<Authority />} />
        <Route path="/auth/userm" element={<Authority />} />
      </Routes>
    </div>
  );
}

export default App;
