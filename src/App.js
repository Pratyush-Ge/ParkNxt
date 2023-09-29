import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Signup from './Pages/Signup';
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";

function App() {
  return (
    <div className="App">
      <Router basename="/park-nxt">
        <Routes>
        <Route path="/park-nxt" component={Home} />
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} /> 
          <Route path="/login" element={<Login />} /> 
          <Route path="/profile" element={<Profile />} /> 
          <Route path="/register" element={<Register />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
