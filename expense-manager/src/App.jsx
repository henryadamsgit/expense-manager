import "./App.css";
import { HomePage } from "./pages/HomePage/HomePage";
import Spending from "./pages/Spending/Spending";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/spending" element={<Spending />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
