import TimelineChart from "./TimelineChart";
import PersonIcon from "@mui/icons-material/Person";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";

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

export const Kony = [
  <TimelineChart
    data={konyCareerPath}
    description={"A brief overview of my professional journey at Kony."}
  />,
  <div>Object 2</div>,
  <div>Object 3</div>,
  <div>Object 4</div>,
];
