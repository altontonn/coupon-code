import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Researcher from "./Researcher";
import Candidate from "./Candidate";
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
            <Route path="/" element={<Researcher />} />
            <Route path="/candidate" element={<Candidate />} />
          </Routes>
        </CodeProvider>
      </Router>
    </Provider>
  );
};
