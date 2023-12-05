import { configureStore } from "@reduxjs/toolkit";
import codeSlice from "./Code/code";

const store = configureStore({
  reducer: {
    codes: codeSlice,
  }
})
export default store;