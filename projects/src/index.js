import React from "react";
import ReactDOM from "react-dom/client";
import "./draft/23-quiz/css/index.css";
import App from "./App";
import { AppProvider } from "./draft/23-quiz/context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
