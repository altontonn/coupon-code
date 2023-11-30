// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import { App } from "./components/App";
// import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { createRoot } from "react-dom/client"
createRoot(document.getElementById("root")).render(<App />);