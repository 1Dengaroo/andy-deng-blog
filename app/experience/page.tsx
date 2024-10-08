import { Experience } from "app/components/experience";

export const metadata = {
  title: "Andy Deng's Experience",
  description:
    "My experience working as a software engineer at Vanta, Evera, Boston College, and more.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        Experience
      </h1>
      <Experience />
    </section>
  );
}
