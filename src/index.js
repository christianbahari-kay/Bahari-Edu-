import React from "react";
import ReactDOM from "react-dom/client"; // ⬅️ Import yang benar untuk React 18
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
