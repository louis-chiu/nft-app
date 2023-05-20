import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Welcome from "./pages/Welcome/Welcome";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="home" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
