import { Skills } from "./skills";
import { Experience } from "../components/experience";
import { About } from "./about";
import { Projects } from "./projects";
import { colors } from "lib/get-skills";

export default function Page() {
  return (
    <section>
      <div className="flex flex-col gap-y-2">
        <About />
        <div className="my-8">
          <div className="flex justify-between">
            <h2 className="text-xl font-semibold tracking-tight pb-3">
              Skills
            </h2>
            <div className="flex gap-x-3 items-center">
              {Object.entries(colors).map(([type, colorClass]) => (
                <div key={type} className="flex items-center gap-x-2">
                  <span className={`w-2 h-2 bg-${colorClass} rounded-full`} />
                  <span className="text-xs">{type}</span>
                </div>
              ))}
            </div>
          </div>
          <Skills />
        </div>
        <div className="my-8">
          <h2 className="text-xl font-semibold tracking-tight pb-2">
            Experience
          </h2>
          <Experience />
        </div>
        <div className="my-8">
          <h2 className="text-xl font-semibold tracking-tight pb-2">
            Projects & Work Samples
          </h2>
          <Projects />
        </div>
      </div>
    </section>
  );
}
