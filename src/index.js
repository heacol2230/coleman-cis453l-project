import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Main from "./Main";

// Replace ReactDOM.render with createRoot
const root = ReactDOM.createRoot(document.getElementById('root')); 
  root.render( <React.StrictMode> 
    <Main /> </React.StrictMode> );
