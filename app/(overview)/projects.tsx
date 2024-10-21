import React from "react";
import { projects as projectsData } from "lib/get-projects";

export const Projects = () => {
  return (
    <div className="container mx-auto">
      <div className="grid gap-8">
        {projectsData.map((project, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-lg">
            <a
              className="font-bold text-cyan-500 hover:underline"
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.name}
            </a>
            <p className="text-sm mb-4">{project.description}</p>
            <iframe
              src={project.url}
              className="w-full h-[650px]"
              title={`Preview of ${project.name}`}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
