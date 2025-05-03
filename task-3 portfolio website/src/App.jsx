import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/header";
import Home from "./components/hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Projects from "./components/Projects";
import Contact from "./components/contact_me";
import Footer from "./components/footer";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <About />
              <Skills />
              <Projects />
              <Certificates />
              <Contact />
              <Footer />
            </>
          }
        />

        <Route
          path="/about"
          element={
            <>
              <Navbar />,<About />
            </>
          }
        />
        <Route
          path="/skills"
          element={
            <>
              <Navbar />
              <Skills />
            </>
          }
        />
        <Route
          path="/projects"
          element={
            <>
              <Navbar />,<Projects />
            </>
          }
        />
        <Route
          path="/certificates"
          element={
            <>
              <Navbar />
              <Certificates />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Navbar />
              <Contact />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
