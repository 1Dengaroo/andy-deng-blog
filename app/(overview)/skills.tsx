import React from "react";
import { skills } from "lib/get-skills";

export const Skills: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-x-2 gap-y-2">
      {skills.map((skill) => (
        <div
          key={skill}
          className="px-3 py-1 rounded-md border rounded-lg text-sm hover:bg-white/10 transition duration-300 cursor-pointer"
        >
          {skill}
        </div>
      ))}
    </div>
  );
};
