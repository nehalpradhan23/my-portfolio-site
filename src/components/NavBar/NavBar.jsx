import React from "react";
import { NavLink } from "react-router-dom";
import navItems from "../header/NavItems";

function NavBar() {
  return (
    <div className="flex sm:gap-8 sm:text-lg lg:text-2xl font-bold ">
      {/* <div className="hover:bg-slate-500 cursor-pointer p-3 rounded-md hover:scale-90 transition-all hover:text-white">
        <NavLink href="#about">About</NavLink>
        <NavLink href="#skills">Skills</NavLink>
        <NavLink href="#experience">Experience</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#education">Education</NavLink>
      </div> */}

      {/* {navItems.map((item) => (
        <div
          key={item.name}
          className="hover:bg-slate-500 cursor-pointer p-3 rounded-md hover:scale-90 transition-all hover:text-white"
        >
          <span className="">{item.name}</span>
        </div>
      ))} */}

      {navItems.map((item) => (
        <div
          key={item.name}
          className="hover:bg-slate-500 cursor-pointer p-3 rounded-md hover:scale-90 transition-all hover:text-white"
        >
          <a href={item.href} className="">
            {item.name}
          </a>
        </div>
      ))}
    </div>
  );
}

export default NavBar;
