import { Route, Routes } from "react-router-dom";
import { Main, Authority, Login, Join, Shop, Board, Notice, Mypage } from "./page";
import { Header, Footer } from "./components";
import NoticeWrite from "./page/NoticeWrite";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/auth" element={<Authority />} />
        <Route path="/join" element={<Join />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/board" element={<Board />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/notice/write" element={<NoticeWrite />} />
      </Routes>
    </div>
  );
}

export default App;
