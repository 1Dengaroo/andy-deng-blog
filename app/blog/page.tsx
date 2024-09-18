import { BlogPosts } from "app/components/posts";

export const metadata = {
  title: "Andy Deng Blog",
  description: "Andy Deng's blog about software development and life.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Blog</h1>
      <BlogPosts />
    </section>
  );
}
