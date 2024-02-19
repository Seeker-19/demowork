import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Property from "./pages/Property.jsx";

const App = () => {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/property" element={<Property/>}></Route>
      </Routes>
    </Router>
  )
};

export default App;
