import React from "react";
import ReactDOM from "react-dom/client";
import "./Main.css";
import HomePage from "./HomePage.jsx";
import Modal from "react-modal";

Modal.setAppElement("#root");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>
);
