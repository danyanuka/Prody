import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
// Vite simplifies the process of using Sass by automatically processing Sass files during development.
// Vite's development server handles the Sass processing on-the-fly, converting the Sass code into regular CSS that the browser can understand.
import "./assets/scss/styles.scss";
// importing db-init-storage triggers the func call of createDatabase inside the db-init-storage file.
import "./services/db-init-storage.service.js";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider>
    <App />
  </Provider>
  // </React.StrictMode>,
);
