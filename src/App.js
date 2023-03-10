import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "../src/components/Home";
import { About } from "../src/components/About";
import { Contact } from "../src/components/Contact";
import { Skills } from "../src/components/Skills";
import { Signup } from "../src/components/Signup";
import "./App.css";

export const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};
