import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import "./assets/scss/styles.scss";
// importing db-init-storage triggers the func call of createDatabase inside the db-init-storage file.
import "./services/db-init-storage.service.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>,
);
