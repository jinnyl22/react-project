import { createSlice } from "@reduxjs/toolkit";

const listFormSlice = createSlice({
  name: "listForm",
  initialState: {
    list: [],
  },
  reducers: {
    listForm: (state, action) => {
      state.list = state.list.concat(action.payload);
    },
  },
});

export default listFormSlice;
export const { listForm } = listFormSlice.actions;
