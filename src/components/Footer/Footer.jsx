import React from "react";
import NavBar from "../NavBar/NavBar";

function Footer() {
  return (
    <div className="flex flex-col items-center gap-3 bg-slate-600 shadow-2xl py-4">
      <h1 className="text-2xl">Nehal pradhan</h1>
      <div>
        <NavBar />
      </div>
      <div className="">
        <span></span>
      </div>
    </div>
  );
}

export default Footer;
