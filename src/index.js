import React from "react";
import {createRoot} from "react-dom/client";
import Main from "./Main";

// Replace ReactDOM.render with createRoot
const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
