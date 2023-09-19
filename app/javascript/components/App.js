import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import store from "../Redux/configureStore";
export const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />}/>
        </Routes>
      </Router>
    </Provider>
  )
}