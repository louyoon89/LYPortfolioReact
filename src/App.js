import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";


function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL + "/"}>
        <Navbar />
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
