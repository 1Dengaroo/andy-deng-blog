import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Andy H. Deng
      </h1>
      <p className="mb-4">
        {`Hello, my name is Andy Deng and I'm recent CS Grad from Boston College. I have the skills of a software engineer, a web developer, and a systems adminstrator. I'm actively involved in developing e-commerce and gaming applications. Recently, I've been studying AI development tools to further my understanding of one the most exciting fields in computer science.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
