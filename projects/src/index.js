import React from "react";
import ReactDOM from "react-dom/client";
import "./draft/21-movie/css/index.css";
import App from "./App";
import { AppProvider } from "./draft/21-movie/context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
