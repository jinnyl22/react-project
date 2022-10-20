import { combineReducers, configureStore } from "@reduxjs/toolkit";
import listFormSlice from "../redux/listFormSlice";

const rootReducer = combineReducers({
  listForm: listFormSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
