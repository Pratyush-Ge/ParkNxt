import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Signup from './Pages/Signup'; // Ensure this import is correct
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Chatbot from './Components/Chatbot'; 

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          {/* Define your routes */}
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} /> 
          <Route path="/login" element={<Login />} /> 
          <Route path="/profile" element={<Profile />} /> 
          <Route path="/register" element={<Register />} /> 
        </Routes>
      </Router>
      <Chatbot />
    </div>
  );
}

export default App;
