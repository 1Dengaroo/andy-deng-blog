import React from "react";
import { experiences } from "lib/get-experience";

function ArrowIcon() {
  return (
    <svg
      className="arrow-icon"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Experience() {
  return (
    <div className="relative">
      {experiences.map((exp, index) => (
        <div key={index} className="flex mb-12">
          <div className="">
            <div className="flex flex-col space-y-1">
              <h3 className="font-bold">
                <div className="flex justify-between">
                  <a
                    href={exp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-500 hover:underline"
                  >
                    {exp.company}
                  </a>
                  <span className="text-sm font-normal text-neutral-500 dark:text-neutral-400">
                    {exp.location}
                  </span>
                </div>
              </h3>
              <div className="italic flex justify-between">
                {exp.role}
                <span className="text-sm font-normal text-neutral-500 dark:text-neutral-400">
                  {exp.date}
                </span>
              </div>
              <ul className="list-disc list-inside space-y-1">
                {exp.description.map((point, idx) => (
                  <li
                    key={idx}
                    className="text-neutral-700 dark:text-neutral-200"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
