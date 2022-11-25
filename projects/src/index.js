import React from "react";
import ReactDOM from "react-dom/client";
import "./draft/13-submenu/css/index.css";
import { AppProvider } from "./draft/13-submenu/context";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
