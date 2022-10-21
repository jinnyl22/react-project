import { Route, Routes } from "react-router-dom";
import { Main, Authority, Login, Join, Shop, Board, Notice, Mypage, BoardWrite, NoticeWrite, Qmanage, NoticeManage, PaymentManage, ProductManage, UserManage } from "./page";
import { Header, Footer } from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Mypage" element={<Mypage />} />
        <Route path="/auth" element={<Authority />} />
        <Route path="/join" element={<Join />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/board" element={<Board />} />
        <Route path="/notice" element={<Board />} />
        <Route path="/notice/write" element={<BoardWrite />} />
        <Route path="/board/write" element={<BoardWrite />} />
        <Route path="/auth/qm" element={<Qmanage />} />
        <Route path="/auth/nm" element={<NoticeManage />} />
        <Route path="/auth/paym" element={<PaymentManage />} />
        <Route path="/auth/prodm" element={<ProductManage />} />
        <Route path="/auth/userm" element={<UserManage />} />
      </Routes>
    </div>
  );
}

export default App;
