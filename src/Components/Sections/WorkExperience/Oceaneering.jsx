import TimelineChart from "./TimelineChart";
import PersonIcon from "@mui/icons-material/Person";
import Skills from "./Skills";
import KeyResponsibilities from "./KeyResponsibilities";
import Projects from "./Projects";

const oceaneeringCareerPath = [
  {
    date: "April, 2018",
    designation: "Application Developer Grade 6",
    icon: <PersonIcon />,
    role: "Mobile Application Developer",
  },
];

const oceaneeringSkillSet = [
  {
    type: "Front-End Skills",
    skills: [
      { name: "JavaScript", icon: "/JavaScript.svg", styling: "" },
      { name: "HTML", icon: "/HTML.svg", styling: "p-1 bg-white" },
      { name: "CSS", icon: "/CSS.svg", styling: "" },
      { name: "JQuery", icon: "/JQuery.svg", styling: "p-1 bg-white" },
      { name: "Java", icon: "/Java.svg", styling: "" },
      { name: "Kotlin", icon: "/Kotlin.svg", styling: "" },
      { name: "C#", icon: "/CSharp.svg", styling: "" },
      { name: "Swift", icon: "/Swift.svg", styling: "" },
    ],
  },
  {
    type: "Back-End Skills",
    skills: [
      { name: "MySQL", icon: "/MySQL.svg", styling: "" },
      { name: "PostgresSQL", icon: "/PostgresSQL.svg", styling: "" },
      { name: "Mongo DB", icon: "/MongoDB.svg", styling: "" },
      { name: "SQLite", icon: "/SQLite.svg", styling: "" },
      { name: "Node.js", icon: "/Node.js.svg", styling: "p-1 bg-white" },
      { name: "Firebase", icon: "/Firebase.svg", styling: "" },
    ],
  },
  {
    type: "Other Skills and Tools",
    skills: [
      { name: "Git", icon: "/Git.svg", styling: "" },
      { name: "GitHub", icon: "/Github.svg", styling: "" },
      { name: "Perforce", icon: "/Perforce.svg", styling: "" },
      { name: "npm", icon: "/npm.svg", styling: "" },
      { name: "Postman", icon: "/Postman.svg", styling: "" },
      { name: "Figma", icon: "/Figma.svg", styling: "" },
      { name: "Confluence", icon: "/Confluence.svg", styling: "" },
      { name: "Adobe XD", icon: "/XD.svg", styling: "" },
      { name: "Adobe Photoshop", icon: "/Photoshop.svg", styling: "" },
      { name: "Kony Visualizer", icon: "/Visualizer.png", styling: "" },
      { name: "Kony Fabric", icon: "/kony.png", styling: "" },
      { name: "Android Studio", icon: "/AndroidStudio.svg", styling: "" },
      { name: "Xcode", icon: "/Xcode.svg", styling: "" },
      { name: "MongoDB Compass", icon: "/MongoDB.svg", styling: "" },
    ],
  },
];

const oceaneeringResponsibilities = ["Todo", "Todo", "Todo", "Todo"];

const oceaneeringProjects = [
  {
    name: "OII-CRM",
    description:
      "Lead Management application which can be used internally to manage and track CRM activities (Sales in particular).",
  },
  {
    name: "OII-Demand Planning",
    description:
      "Inventory Management application for internal use to manage different assets within the company.",
  },
  {
    name: "OII-Checklist",
    description:
      "Checklist application to keep a track of all the tasks to be performed by a technician for a particular job.",
  },
  {
    name: "OII-OMS",
    description:
      "Offshore Management System application used to fill the daily project reports of the crews operating at different locations.",
  },
  {
    name: "CRM Dashboard",
    description:
      "Web application to see the company finances in a graphical representation using charts.",
  },
  {
    name: "POCs",
    description: (
      <ul className="list-disc ml-4">
        <li>Optical Character Recognition</li>
        <li>Firebase Cloud Messaging</li>
        <li>Kony Developer Portal</li>
      </ul>
    ),
  },
];

export const Oceaneering = [
  <TimelineChart
    data={oceaneeringCareerPath}
    description={"A brief overview of my professional journey at Oceaneering."}
  />,
  <Skills
    description={
      "A list of my technical skills used during my time at Oceaneering."
    }
    skillSet={oceaneeringSkillSet}
  />,
  <KeyResponsibilities
    description={"A summary of my key responsibilities at Oceaneering."}
    responsibilities={oceaneeringResponsibilities}
  />,
  <Projects
    description={"A list of all the projects I worked on at Oceaneering."}
    projects={oceaneeringProjects}
  />,
];
