import { createSlice } from "@reduxjs/toolkit";
import { checkFetch } from "../middleware/JoinFetch";

const joinPassSlice = createSlice({
  name: "join",
  initialState: {
    idCheck: false,
    emailCheck: false,
  },
  extraReducers: (builder) => {
    builder.addCase(checkFetch.pending, (state, action) => {
      state.idCheck = false;
    });
    builder.addCase(checkFetch.fulfilled, (state, action) => {
      console.log(action.payload);
      state.idCheck = action.payload.idstatus;
      console.log(state.idCheck);
    });
    builder.addCase(checkFetch.rejected, (state, action) => {
      state.idCheck = false;
    });
  },
});

export default joinPassSlice;
