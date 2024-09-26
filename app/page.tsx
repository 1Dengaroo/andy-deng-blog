import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Andy H. Deng
      </h1>
      <p className="mb-6 text-lg">
        {`Hello, my name is Andy Deng and I'm a recent computer science graduate from Boston College. 
        I have the skills of a software engineer, a web developer, and a game developer. 
        I'm actively involved in developing e-commerce platforms and gaming applications. 
        Recently, I've been working on a project to develop a web-based game using Unity and C#. 
        I'm also working as a contractor to help migrate an e-commerce platform from React and Rails to Next.js, Medusa, and Node.js.`}
      </p>
      <p className="mb-6 text-lg">
        {`I have completed multiple internships at well-respected and established companies. 
        At Vanta, I improved my software development skills working as a full stack software engineer. 
        Concurrently, I worked with Professor Maira Samary at Boston College to develop a TA-Professor matching system. 
        Additionally, I have experience working as a software engineer for Evera over the 2023 summer, where I developed an online clothing ecommerce platform. 
        Overall, these experiences have provided me with a comprehensive introduction into the vast world of software development.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
