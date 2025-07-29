import StyledRadar from "./RadarChart";

export default function SkillsOverview() {
  const frontendSkillsData = [
    {
      name: "JavaScript / TypeScript",
      rating: "9",
    },
    {
      name: "HTML / CSS",
      rating: "9",
    },
    {
      name: "Tailwind CSS",
      rating: "8",
    },
    {
      name: "ReactJS",
      rating: "9",
    },
    {
      name: "Jest",
      rating: "8.5",
    },
    {
      name: "Karma / Jasmine",
      rating: "7",
    },
    {
      name: "Jquery",
      rating: "7",
    },
  ];
  const backendSkillsData = [
    {
      name: "MySQL",
      rating: "8.5",
    },
    {
      name: "Oracle SQL",
      rating: "8",
    },
    {
      name: "Node.js",
      rating: "7",
    },
    {
      name: "Java",
      rating: "7",
    },
    {
      name: "MongoDB",
      rating: "8",
    },
    {
      name: "SQLite",
      rating: "8.5",
    },
  ];
  const otherSkillsData = [
    {
      name: "Netsuite",
      rating: "9.5",
    },
    {
      name: "Git / GitHub / GitLab",
      rating: "9.5",
    },
    {
      name: "npm / pnpm",
      rating: "9",
    },
    {
      name: "Postman",
      rating: "8.5",
    },
    {
      name: "Figma / Adobe Photoshop",
      rating: "6",
    },
    {
      name: "VS Code / WebStorm",
      rating: "8.5",
    },
  ];

  return (
    <div className="w-full">
      <p className="text-center">
        A snapshot of the skills I've built over the years
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-16 p-8 w-full">
        <StyledRadar
          data={frontendSkillsData}
          colorCode={"#4ade80"}
          heading={"Front-End Skills"}
        />
        <StyledRadar
          data={backendSkillsData}
          colorCode={"#3b82f6"}
          heading={"Back-End Skills"}
        />
        <StyledRadar
          data={otherSkillsData}
          colorCode={"#facc15"}
          heading={"Other Skills"}
        />
      </div>
    </div>
  );
}
