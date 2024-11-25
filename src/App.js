import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import "./App.css";
import Skills from "./Components/Skills/Skills";
import WorkExperience from "./Components/WorkExperience/WorkExperience";
import ContactMe from "./Components/ContactMe/ContactMe";
import Footer from "./Components/Footer/Footer";
import { useState,useEffect } from "react";
function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);
  
    useEffect(() => {
      const darkModeMediaQuery = window.matchMedia(
        "(prefers-color-scheme: dark)"
      );
      setIsDarkMode(darkModeMediaQuery.matches);
      const handleDarkModeChange = (e) => {
        setIsDarkMode(e.matches);
      };
  
      darkModeMediaQuery.addEventListener("change", handleDarkModeChange);
      return () => {
        darkModeMediaQuery.removeEventListener("change", handleDarkModeChange);
      };
    }, []);
  
  return (
    <>
    <Navbar/>
    <div className="container">
      <Hero/>
      <Skills darkMode = {isDarkMode}/>
      <WorkExperience/>
      <ContactMe/>
    </div>
    <Footer/>
    </>
  );
}

export default App;
