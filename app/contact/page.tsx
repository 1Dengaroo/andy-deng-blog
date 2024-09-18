import Contact from "app/components/contact";

export const metadata = {
  title: "Andy Deng's Contact Information",
  description: "My contacts.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Contact</h1>
      <Contact />
    </section>
  );
}
