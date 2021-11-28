import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
//import Modal from "./components/Modal";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Services from "./components/pages/Services";
//import Products from "./components/pages/Products";
//import SignUp from "./components/pages/SignUp";

function App() {
  return (
    <div className="divumare">
      {/* <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact component={Home} />
        </Routes>
      </Router> */}
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
