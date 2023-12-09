import React from "react";
import Container from "../Container";
import { Bio } from "../../data/constants";
function HeroSection() {
  return (
    <Container>
      {/* <div className="w-[80%] mx-auto">HeroSection</div> */}
      <div
        id="about"
        className="h-[920px] flex flex-col justify-center gap-[50px] pt-[80px] px-5"
      >
        <div className="flex flex-col">
          <div className="text-7xl mb-5">Hi, I am {Bio.name}</div>
          <div className="text-2xl">{Bio.description}</div>
        </div>
        <button
          className="bg-gradient-to-r from-purple-800 to-fuchsia-700 
        inline-flex w-fit p-5 rounded-lg hover:scale-110  transition-all hover:bg-red-400 text-3xl text-white shadow-[0px_5px_20px_1px_#000]"
        >
          Check Resume
        </button>
      </div>
    </Container>
  );
}

export default HeroSection;
