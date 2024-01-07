import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Researcher from "./Researcher";
import Candidate from "./Candidate";
import LoginForm from "./user/Login";
import RegisterForm from "./user/Registration";
import { CodeProvider } from "./CodeContext";
import Menu from "./Menu";
import store from "../Redux/configureStore";
import { Provider } from "react-redux";
export const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Menu />
        <CodeProvider>
          <Routes>
            <Route path="/" element={<Candidate />} />
            <Route path="/researcher" element={<Researcher />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
          </Routes>
        </CodeProvider>
      </Router>
    </Provider>
  );
};
