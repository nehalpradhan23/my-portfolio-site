import React from "react";
import ThemeButton from "../ThemeButton";
import { FaLaptopCode } from "react-icons/fa";
import NavBar from "../NavBar/NavBar";

function Header() {
  return (
    <div className="w-[100%] dark:bg-slate-900 fixed shadow-lg z-30 bg-white">
      <div className="sm:w-[80%] sm:h-[78px] mx-auto flex justify-between items-center">
        {/* left logo ============ */}
        <div className="flex items-center p-2 rounded-lg gap-2 cursor-pointer hover:scale-110 hover:shadow-lg transition-all">
          <FaLaptopCode size="2.7rem" />
          <span className="font-bold hidden md:block">My portfolio</span>
        </div>
        {/* middle ================ */}
        <div className="">
          <NavBar />
        </div>
        {/* right =================================== */}
        <div className="">
          <ThemeButton />
        </div>
      </div>
    </div>
  );
}

export default Header;
