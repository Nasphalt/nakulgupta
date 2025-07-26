import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";

export default function TimelineChart({ data, description }) {
  return (
    <div>
      <div>
        <h2 className="text-lg font-bold mb-2">Career Path</h2>
        <p className="text-gray-300 mb-4 text-sm">{description}</p>
      </div>

      <Timeline position="alternate">
        {data.map((item, index) => (
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              className="text-gray-400"
            >
              {item.date}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot>{item.icon}</TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent
              sx={{ py: "12px", px: 2 }}
              variant="body"
              className="text-white"
            >
              <Typography variant="body" component="span">
                {item.designation}
              </Typography>
              <Typography variant="body2" className="text-gray-300">
                {item.role}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}
