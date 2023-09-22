import { configureStore } from "@reduxjs/toolkit";
import { reducer as codeReducer } from "./Code/code";

const store = configureStore({
  reducer: {
    code: codeReducer,
  }
})
export default store;
