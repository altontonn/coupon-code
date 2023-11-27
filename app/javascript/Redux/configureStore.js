import { configureStore } from "@reduxjs/toolkit";
import codeSlice from "./Code/code";
import addCodeSlice from "./Code/AddCode";

const store = configureStore({
  reducer: {
    codes: codeSlice,
    newCodes: addCodeSlice

  }
})
export default store;