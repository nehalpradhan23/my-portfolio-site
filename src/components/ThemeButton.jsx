import React, { useContext, useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import UserContext from "../contexts/UserContext";

function ThemeButton() {
  const { darkMode, setDarkMode } = useContext(UserContext);
  const changeTheme = () => {
    setDarkMode(!darkMode);
  };
  // =======================================================
  return (
    <div>
      <button onClick={changeTheme} className="w-[50px] h-[50px] text-[50px] bg-red-600">
        {darkMode ? <MdDarkMode /> : <CiLight />}
      </button>
    </div>
  );
}

export default ThemeButton;
