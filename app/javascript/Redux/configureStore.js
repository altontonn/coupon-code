import { configureStore } from "@reduxjs/toolkit";
import codeSlice from "./Code/code";
import userSlice from "./userSlice";
import authorizationSlice from "./authorization";

const store = configureStore({
  reducer: {
    codes: codeSlice,
    user: userSlice,
    authorization: authorizationSlice
  }
})
export default store;