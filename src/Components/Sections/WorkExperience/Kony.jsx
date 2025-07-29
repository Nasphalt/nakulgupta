import TimelineChart from "./TimelineChart";
import PersonIcon from "@mui/icons-material/Person";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import Skills from "./Skills";
import KeyResponsibilities from "./KeyResponsibilities";
import Projects from "./Projects";

const konyCareerPath = [
  {
    date: "August, 2016",
    designation: "Software Developer Engineer",
    icon: <PersonIcon />,
    role: "Mobile Application Developer",
  },
  {
    date: "August, 2015",
    designation: "Software Developer Intern",
    icon: <DeveloperModeIcon />,
    role: "Mobile Application Developer",
  },
];

const konySkillSet = [
  {
    type: "Front-End Skills",
    skills: [
      { name: "JavaScript", icon: "/JavaScript.svg", styling: "" },
      { name: "HTML", icon: "/HTML.svg", styling: "p-1 bg-white" },
      { name: "CSS", icon: "/CSS.svg", styling: "" },
    ],
  },
  {
    type: "Back-End Skills",
    skills: [
      { name: "Java", icon: "/Java.svg", styling: "" },
      { name: "MySQL", icon: "/MySQL.svg", styling: "" },
      { name: "PostgresSQL", icon: "/PostgresSQL.svg", styling: "" },
      { name: "SQLite", icon: "/SQLite.svg", styling: "" },
      { name: "PeopleSoft", icon: "/PeopleSoft.svg", styling: "p-1 bg-white" },
      { name: "LDAP", icon: "/LDAP.png", styling: "" },
      { name: "SAP", icon: "/SAP.svg", styling: "" },
    ],
  },
  {
    type: "Other Skills and Tools",
    skills: [
      { name: "Git", icon: "/Git.svg", styling: "" },
      { name: "GitHub", icon: "/Github.svg", styling: "" },
      { name: "npm", icon: "/npm.svg", styling: "" },
      { name: "Postman", icon: "/Postman.svg", styling: "" },
      { name: "Kony Visualizer", icon: "/Visualizer.png", styling: "" },
      { name: "Kony Fabric", icon: "/kony.png", styling: "" },
      { name: "Android Studio", icon: "/AndroidStudio.svg", styling: "" },
    ],
  },
];

const konyResponsibilities = ["Todo", "Todo", "Todo", "Todo"];

const konyProjects = [
  {
    name: "My Loans",
    description:
      "Mobile application to facilitate Loans for a leading bank based out of USA",
  },
  {
    name: "ESS Suite SME for Oceaneering International",
    description: (
      <div>
        <p>
          Configure and customize two mobile applications (Android, iPhone):
        </p>
        <p>
          First to facilitate employees to submit timesheets and second to
          empower managers to view and approve the submitted timesheets.
        </p>
      </div>
    ),
  },
  {
    name: "Employee Self Service Application Suite",
    description:
      "A suite of 6 Applications for Mobile, Tablet and Desktop-Web to facilitate employees and managers to perform tasks related to leave management, Timesheet management, expense management, profile management, salary management and approvals management.",
  },
  {
    name: "Kony Field Sales",
    description:
      "An application for android and iOS tablets to enable salespersons to accelerate productivity on the go.",
  },
];

export const Kony = [
  <TimelineChart
    data={konyCareerPath}
    description={"A brief overview of my professional journey at Kony."}
  />,
  <Skills
    description={"A list of my technical skills used during my time at Kony."}
    skillSet={konySkillSet}
  />,
  <KeyResponsibilities
    description={"A summary of my key responsibilities at Kony."}
    responsibilities={konyResponsibilities}
  />,
  <Projects
    description={"A list of all the projects I worked on at Kony."}
    projects={konyProjects}
  />,
];
