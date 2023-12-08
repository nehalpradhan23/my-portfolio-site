import { useContext, useEffect } from "react";
import "./App.css";
import UserContext from "./contexts/UserContext";
import Header from "./components/header/Header";

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
    <div className="bg-slate-800 h-[100vh]">
      <div className="mx-auto shadow-lg">
        <Header />
      </div>
    </div>
  );
}

export default App;
