import React from "react";
import ThemeButton from "../ThemeButton";
import navItems from "./NavItems";
import { FaLaptopCode } from "react-icons/fa";

function Header() {
  return (
    <div className="w-[80%] h-[80px] bg-transparent text-white mx-auto flex justify-between items-center">
        {/* left logo ============ */}
        <div className="flex items-center gap-2">
          <FaLaptopCode size="3rem" />
          <span className="font-bold">My portfolio</span>
        </div>
        {/* middle ================ */}
        <div className="flex gap-8 text-xl font-bold">
          {navItems.map((item) => (
            <span key={item.name}>{item.name}</span>
          ))}
        </div>
        {/* right =================================== */}
        <div className="">
          <ThemeButton />
        </div>
    </div>
  );
}

export default Header;
