import TimelineChart from "./TimelineChart";
import PersonIcon from "@mui/icons-material/Person";
import KeyResponsibilities from "./KeyResponsibilities";

const oceaneeringCareerPath = [
  {
    date: "April, 2018",
    designation: "Application Developer Grade 6",
    icon: <PersonIcon />,
    role: "Mobile Application Developer",
  },
];

const oceaneeringResponsibilities = [
  "Developed and maintained mobile applications for various clients.",
  "Collaborated with cross-functional teams to define, design, and ship new features.",
  "Ensured the performance, quality, and responsiveness of applications.",
  "Identified and corrected bottlenecks and fix bugs.",
];

export const Oceaneering = [
  <TimelineChart
    data={oceaneeringCareerPath}
    heading={"Career Path"}
    description={"A brief overview of my professional journey at Oceaneering."}
  />,
  <div>Object 2</div>,
  <KeyResponsibilities
    heading={"Key Responsibilities"}
    description={"A summary of my key responsibilities at Oceaneering."}
    responsibilities={oceaneeringResponsibilities}
  />,
  <div>Object 4</div>,
];
