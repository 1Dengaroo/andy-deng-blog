import React from "react";
import { skills, colors } from "lib/get-skills";

export const Skills: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-x-2 gap-y-2">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className={`px-3 py-1 rounded-md rounded-lg text-sm hover:bg-white/10 transition duration-300 cursor-pointer border border-${
            colors[skill.type]
          }`}
        >
          {skill.name}
        </div>
      ))}
    </div>
  );
};
