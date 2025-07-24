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

export const Oracle = [
  <TimelineChart
    data={oracleCareerPath}
    heading={"Career Path"}
    description={"A brief overview of my professional journey at Oracle."}
  />,
  <Skills
    heading={"Technical Skills"}
    description={"A list of my technical skills used during my time at Oracle."}
  />,
  <div>Object 3</div>,
  <div>Object 4</div>,
];
