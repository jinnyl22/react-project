import { createSlice } from "@reduxjs/toolkit";
import { emailCheckFetch, idCheckFetch } from "../middleware/JoinFetch";

const joinPassSlice = createSlice({
  name: "joinPass",
  initialState: {
    idCheck: false,
    pwCheck: false,
    emailCheck: false,
    authNum: "",
  },
  reducers: {
    emailNumCheck: (state, action) => {
      console.log(action.payload);
      state.emailCheck = action.payload;
    },
    passwordCheck: (state, action) => {
      state.pwCheck = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(idCheckFetch.pending, (state, action) => {
      state.idCheck = false;
    });
    builder.addCase(idCheckFetch.fulfilled, (state, action) => {
      console.log(action.payload);
      state.idCheck = action.payload.idstatus;
      console.log("아이디 중복 체크 완료 " + state.idCheck);
    });
    builder.addCase(idCheckFetch.rejected, (state, action) => {
      state.idCheck = false;
    });
    builder.addCase(emailCheckFetch.pending, (state, action) => {
      state.authNum = "";
    });
    builder.addCase(emailCheckFetch.fulfilled, (state, action) => {
      state.authNum = action.payload.authNum;
      console.log(state.authNum);
    });
    builder.addCase(emailCheckFetch.rejected, (state, action) => {
      state.authNum = "";
    });
  },
});

export const joinPassAction = joinPassSlice.actions;
export default joinPassSlice;
