import GroupIcon from "@mui/icons-material/Group";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import Groups2Icon from "@mui/icons-material/Groups2";
import TimelineChart from "./TimelineChart";
import Skills from "./Skills";

const oracleCareerPath = [
  {
    date: "September, 2024",
    designation: "IC3 Level 2 | Team Lead",
    icon: <Groups2Icon />,
  },
  {
    date: "March, 2022",
    designation: "IC3 Level 1 | Senior Software Engineer",
    icon: <GroupIcon />,
  },
  {
    date: "March, 2020",
    designation: "IC2 Level 2 | Software Engineer",
    icon: <LaptopMacIcon />,
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
    type: "Other Skills",
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

export const Oracle = [
  <TimelineChart
    data={oracleCareerPath}
    heading={"Career Path"}
    description={"A brief overview of my professional journey at Oracle."}
  />,
  <Skills
    heading={"Technical Skills"}
    description={"A list of my technical skills used during my time at Oracle."}
    skillSet={oracleSkillSet}
  />,
  <div>Object 3</div>,
  <div>Object 4</div>,
];
