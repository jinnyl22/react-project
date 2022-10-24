import { createSlice } from "@reduxjs/toolkit";
import { emailCheckFetch, idCheckFetch } from "../middleware/JoinFetch";

const joinPassSlice = createSlice({
  name: "join",
  initialState: {
    idCheck: false,
    emailCheck: false,
    authNum: "",
  },
  extraReducers: (builder) => {
    builder.addCase(idCheckFetch.pending, (state, action) => {
      state.idCheck = false;
    });
    builder.addCase(idCheckFetch.fulfilled, (state, action) => {
      console.log(action.payload);
      state.idCheck = action.payload.idstatus;
      console.log(state.idCheck);
    });
    builder.addCase(idCheckFetch.rejected, (state, action) => {
      state.idCheck = false;
    });
    builder.addCase(emailCheckFetch.pending, (state, action) => {
      state.emailCheck = false;
    });
    builder.addCase(emailCheckFetch.fulfilled, (state, action) => {
      state.emailCheck = action.payload.emailStatus;
      console.log(state.emailCheck);
    });
    builder.addCase(emailCheckFetch.rejected, (state, action) => {
      state.emailCheck = false;
    });
  },
});

export default joinPassSlice;
