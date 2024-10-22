type skill = {
  name: string;
  type: string;
};

export const skills: skill[] = [
  { name: "JavaScript", type: "Language" },
  { name: "TypeScript", type: "Language" },
  { name: "React", type: "Framework" },
  { name: "Next.js", type: "Framework" },
  { name: "Firebase", type: "Cloud" },
  { name: "Node.js", type: "Framework" },
  { name: "Express", type: "Framework" },
  { name: "Ruby", type: "Language" },
  { name: "Rails", type: "Framework" },
  { name: "GraphQL", type: "Other" },
  { name: "Python", type: "Language" },
  { name: "Django", type: "Framework" },
  { name: "PostgreSQL", type: "Database" },
  { name: "Redis", type: "Database" },
  { name: "Git", type: "Tool" },
  { name: "Docker", type: "Tool" },
  { name: "Jest", type: "Testing" },
  { name: "RSpec", type: "Testing" },
  { name: "Playwright", type: "Testing" },
  { name: "Pytest", type: "Testing" },
  { name: "AWS", type: "Cloud" },
  { name: "Google Cloud", type: "Cloud" },
  { name: "Cloudflare", type: "Cloud" },
  { name: "Heroku", type: "Cloud" },
];

export const colors = {
  Framework: "blue-500",
  Language: "green-500",
  Database: "red-500",
  Testing: "yellow-500",
  Cloud: "purple-500",
  Tool: "indigo-500",
  Other: "pink-500",
};
