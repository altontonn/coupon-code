import { configureStore } from "@reduxjs/toolkit";
import codeSlice from "./Code/code";
import authorizationSlice from "./authorization";

const store = configureStore({
  reducer: {
    codes: codeSlice,
    authorization: authorizationSlice
  }
})
export default store;