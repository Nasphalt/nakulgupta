import GroupIcon from "@mui/icons-material/Group";
import PersonIcon from "@mui/icons-material/Person";
import Groups2Icon from "@mui/icons-material/Groups2";
import TimelineChart from "./TimelineChart";
import Skills from "./Skills";
import KeyResponsibilities from "./KeyResponsibilities";
import Projects from "./Projects";

const oracleCareerPath = [
  {
    date: "September, 2024",
    designation: "IC3 Level 2 | Team Lead",
    icon: <Groups2Icon />,
    role: "Front-End Web Developer",
  },
  {
    date: "March, 2022",
    designation: "IC3 Level 1 | Senior Software Engineer",
    icon: <GroupIcon />,
    role: "Front-End Web Developer",
  },
  {
    date: "March, 2020",
    designation: "IC2 Level 2 | Software Engineer",
    icon: <PersonIcon />,
    role: "Front-End Web Developer",
  },
];

const oracleSkillSet = [
  {
    type: "Front-End Skills",
    skills: [
      { name: "JavaScript", icon: "/JavaScript.svg", styling: "" },
      { name: "TypeScript", icon: "/TypeScript.svg", styling: "" },
      { name: "HTML", icon: "/HTML.svg", styling: "p-1 bg-white" },
      { name: "CSS", icon: "/CSS.svg", styling: "" },
      {
        name: "Tailwind CSS",
        icon: "/TailwindCSS.svg",
        styling: "",
      },
      { name: "ReactJS", icon: "/ReactJS.svg", styling: "" },
      { name: "JQuery", icon: "/JQuery.svg", styling: "p-1 bg-white" },
    ],
  },
  {
    type: "Back-End Skills",
    skills: [
      { name: "MySQL", icon: "/MySQL.svg", styling: "" },
      { name: "Oracle SQL", icon: "/OracleSQL.svg", styling: "" },
      { name: "Node.js", icon: "/Node.js.svg", styling: "p-1 bg-white" },
    ],
  },
  {
    type: "Other Skills and Tools",
    skills: [
      { name: "NetSuite", icon: "/NetSuite.svg", styling: "p-1 bg-white" },
      { name: "Git", icon: "/Git.svg", styling: "" },
      { name: "GitHub", icon: "/Github.svg", styling: "" },
      { name: "GitLab", icon: "/Gitlab.svg", styling: "" },
      { name: "npm", icon: "/npm.svg", styling: "" },
      { name: "pnpm", icon: "/pnpm.svg", styling: "" },
      { name: "Postman", icon: "/Postman.svg", styling: "" },
      { name: "Figma", icon: "/Figma.svg", styling: "" },
      { name: "Jira", icon: "/Jira.svg", styling: "" },
      { name: "Confluence", icon: "/Confluence.svg", styling: "" },
      { name: "WebStorm", icon: "/WebStorm.svg", styling: "" },
      {
        name: "Visual Studio Code",
        icon: "/VisualStudioCode.svg",
        styling: "",
      },
    ],
  },
];

const oracleProjects = [
  {
    name: "Supply 360",
    description: "Get an overview report of all the supplies.",
  },
];

const oracleResponsibilities = [
  "Manage and maintain a portfolio of 14 applications, overseeing feature enhancements, resolution of customer-reported issues, and technical debt reduction.",
  "Lead the end-to-end development of any new projects, from technical design and architecture to implementation and deployment.",
  "Continuously gain and apply domain knowledge of manufacturing processes to design solutions that align with industry workflows and best practices.",
  "Provide technical leadership, guiding and supporting the team in resolving complex technical challenges across all applications.",
  "Establish and enforce clean code architecture standards to ensure scalability, maintainability, and long-term sustainability of all applications.",
  "Lead the migration of unit testing frameworks from Karma to Jest to improve test reliability and maintainability.",
  "Assess and implement changes driven by updates in the NetSuite core platform to ensure continued compatibility and performance of applications.",
  "Set up and maintain development infrastructure, including Git repositories, CI/CD pipelines, and SonarQube for code quality management.",
  "Drive technical research and proof-of-concepts (POCs) to evaluate feasibility and mitigate risks before project initiation.",
  "Explore and integrate emerging technologies such as AI-driven prompt generation, Webpack optimization, RESTlet-based API development, and NetSuite’s User Interface Framework (UIF) to enhance product capabilities.",
  "Ensure timely resolution of customer issues, maintaining high standards for service quality and meeting defined SLTs.",
  "Conduct rigorous code reviews, define coding standards, and promote best practices for security, performance, and maintainability across all development efforts.",
  "Facilitate seamless integration between NetSuite UI customizations and backend SuiteScript logic to deliver cohesive, high-performing solutions.",
  "Collaborate on development stories, ensuring adherence to coding standards, minimizing defects, and delivering high-quality releases on schedule.",
  "Foster cross-team collaboration by working closely with UI/UX designers, product managers, and other internal development teams to ensure alignment between technical solutions, user experience, and business goals.",
];

export const Oracle = [
  <TimelineChart
    data={oracleCareerPath}
    description={"A brief overview of my professional journey at Oracle."}
  />,
  <Skills
    description={"A list of my technical skills used during my time at Oracle."}
    skillSet={oracleSkillSet}
  />,
  <KeyResponsibilities
    description={"A summary of my key responsibilities at Oracle."}
    responsibilities={oracleResponsibilities}
  />,
  <Projects
    description={"A list of all the projects I worked on at Oracle."}
    projects={oracleProjects}
  />,
];
