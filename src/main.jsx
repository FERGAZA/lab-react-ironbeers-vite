import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from "./App.jsx";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
);
