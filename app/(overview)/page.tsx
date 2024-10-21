import { Skills } from "./skills";
import { Experience } from "../components/experience";
import { About } from "./about";
import { Projects } from "./projects";

export default function Page() {
  return (
    <section>
      <div className="flex flex-col gap-y-2">
        <About />
        <div className="my-8">
          <h2 className="text-xl font-semibold tracking-tight pb-2">Skills</h2>
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
