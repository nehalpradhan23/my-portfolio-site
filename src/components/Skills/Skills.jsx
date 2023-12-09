import React from "react";
import Container from "../Container";
import SkillsCard from "./SkillsCard";
import { skills } from "../../data/constants";

function Skills() {
  // console.log(skills);
  return (
    <div
      id="skills"
      className="h-fit dark:bg-slate-900 shadow-[0px_2px_12px_1px_#000]"
    >
      <Container>
        <div className="flex flex-col gap-5 pt-[90px]">
          <h1 className="text-4xl md:text-6xl">Skills</h1>
          <p className="text-2xl md:text-4xl">
            listed below are the set of skills that i've been involved in and
            learning
          </p>
        </div>
        <div className="mt-[50px]">
          {skills.map((skill) => (
            <SkillsCard skill={skill} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Skills;
