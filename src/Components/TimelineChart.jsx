import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import GroupIcon from "@mui/icons-material/Group";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import Groups2Icon from "@mui/icons-material/Groups2";

export default function TimelineChart() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          className="text-gray-400"
        >
          September, 2024
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <Groups2Icon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent
          sx={{ m: "auto 0" }}
          align="left"
          variant="body"
          className="text-white"
        >
          IC3 Level 2 | Team Lead
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          className="text-gray-400"
        >
          March, 2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <GroupIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent
          sx={{ m: "auto 0" }}
          align="left"
          variant="body"
          className="text-white"
        >
          IC3 Level 1 | Senior Software Engineer
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          className="text-gray-400"
        >
          March, 2020
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent
          sx={{ m: "auto 0" }}
          align="left"
          variant="body"
          className="text-white"
        >
          IC2 Level 2 | Software Engineer
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
