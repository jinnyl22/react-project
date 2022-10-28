import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// 유저 로그인 상태 확인
const loginFetch = createAsyncThunk("loginSlice/isLogin", async (userLogin) => {
  console.log(userLogin);
  const loginFetchResult = await axios.post("http://192.168.0.198:80/user/login", userLogin);
  console.log(loginFetchResult.data);
  // alert(loginFetchResult.data);
  return loginFetchResult.data;
});

export { loginFetch };

// 로그인 앞단(데이터를 만들어서 선물) -> 페치(선물을 택배박스에 집어넣고 택배를 보내는거야 ) -> router.post (req.body==페치에서 보낸 데이터가 {{}})

// req.body =={{}}

// {id, pw} = req

// 기존 req.body == {{}}
