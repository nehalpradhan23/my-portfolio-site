import { useContext, useEffect } from "react";
import "./App.css";
import ThemeButton from "./components/ThemeButton";
import UserContext from "./contexts/UserContext";

function App() {
  const { darkMode } = useContext(UserContext);

  useEffect(() => {
    const themeMode = darkMode ? "dark" : "light";
    console.log(themeMode);
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [darkMode]);

  
  // ===============================================
  return (
    <>
      <ThemeButton />
    </>
  );
}

export default App;
