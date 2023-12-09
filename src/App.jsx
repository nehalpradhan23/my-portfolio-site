import { useContext, useEffect } from "react";
import "./App.css";
import UserContext from "./contexts/UserContext";
import Header from "./components/header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";

function App() {
  const { darkMode } = useContext(UserContext);

  // for dark mode toggle
  useEffect(() => {
    const themeMode = darkMode ? "dark" : "light";
    console.log(themeMode);
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [darkMode]);

  // ===============================================
  return (
    <div className="bg-white dark:bg-slate-800 h-[100%] text-slate-800 dark:text-white flex flex-col justify-between">
      <Header />
      <HeroSection />
      <Skills />
      <Projects />
      <Education />
      <Footer />
    </div>
  );
}

export default App;
