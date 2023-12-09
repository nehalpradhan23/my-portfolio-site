import React from "react";

function SkillsCard({ skill }) {
  console.log("skill");
  return (
    <div className="w-full flex flex-col mb-[40px] items-center justify-between rounded-2xl border py-[28px] px-[36px] shadow-[0px_2px_12px_1px_#854CE6]">
      <div className="text-2xl sm:text-4xl mb-5">{skill.title}</div>
      <div className="flex flex-wrap gap-6 justify-center">
        {skill.skills.map((item) => (
          <div className="flex gap-2 border-2 border-gray-400 rounded-lg flex-wrap px-2 md:px-4 py-3 items-center">
            <img src={item.image} className="w-[30px] h-[30px]"/>
            <span className="text-sm md:text-lg">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsCard;
