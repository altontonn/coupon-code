import { applyMiddleware, combineReducers, configureStore } from "@reduxjs/toolkit";
import codeSlice from "./Code/code";
const reducer = combineReducers({
  codes: codeSlice,
})
const store = configureStore(reducer, applyMiddleware(thunk))
export default store;
