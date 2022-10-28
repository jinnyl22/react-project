import { createSlice } from "@reduxjs/toolkit";
import { loginFetch } from "../middleware/loginFetch";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    id: "",
    isLogin: false,
    admin: 0,
  },
  extraReducers: (builder) => {
    builder.addCase(loginFetch.pending, (state, action) => {
      state.id = "";
      state.isLogin = false;
      state.admin = 0;
    });
    builder.addCase(loginFetch.fulfilled, (state, action) => {
      state.id = action.payload.id;
      state.isLogin = action.payload.isLogin;
      state.admin = action.payload.admin;
    });
    builder.addCase(loginFetch.rejected, (state, action) => {
      state.id = "";
      state.isLogin = false;
      state.admin = 0;
    });
  },
});

export { loginSlice };
