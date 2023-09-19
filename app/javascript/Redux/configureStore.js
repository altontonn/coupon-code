import { combineReducers, configureStore } from "@reduxjs/toolkit";
import codeSlice from "./Code/code";
const reducer = combineReducers({
  codes: codeSlice,
})
