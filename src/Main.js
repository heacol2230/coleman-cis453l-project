import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import UserHomePage from "./pages/UserHomePage";
import Subscriptions from "./pages/Subscriptions";

class Main extends Component {
  render() {
    return (
      <Router>
        <div className="bg-black">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/user-homepage" element={<UserHomePage />} />
            <Route path="/subscriptions" element={<Subscriptions />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default Main;
