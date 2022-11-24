import React from "react";
import ReactDOM from "react-dom/client";
import "./draft/12-sidebarModal/css/index.css";
import { AppProvider } from "./draft/12-sidebarModal/context";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
