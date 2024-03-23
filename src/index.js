import React from "react";
import { createRoot } from "react-dom/client"; // Importing createRoot from react-dom/client
import "./index.css";
import Main from "./Main";

// Replace ReactDOM.render with createRoot
const root = createRoot(document.getElementById('root')); // Using createRoot instead of ReactDOM.render
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
