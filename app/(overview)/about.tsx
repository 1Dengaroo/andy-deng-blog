import { GrLocationPin } from "react-icons/gr";
import { contacts } from "lib/get-contacts";

export const About = () => {
  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold tracking-tighter">
          Andy H. Deng
        </h1>
        <div className="flex gap-x-3 items-center">
          {contacts.map((contact) => {
            const Icon = contact.icon;
            return (
              <a
                key={contact.name}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl"
              >
                <Icon />
              </a>
            );
          })}
        </div>
      </div>

      <div className="flex items-center gap-x-2 text-neutral-300">
        <GrLocationPin />
        <span className="">Boston, MA</span>
      </div>
      <p className="">
        {`Hello, my name is Andy Deng and I'm a recent computer science graduate from Boston College. 
            I have the skills of a software engineer, a web developer, and a game developer. 
            I'm currently a software engineer at forREAL, and I am actively involved in developing e-commerce platforms.
          `}
      </p>
    </>
  );
};
