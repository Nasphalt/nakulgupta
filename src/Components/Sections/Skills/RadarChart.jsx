import React from "react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const CustomAngleTick = ({ payload, x, y, textAnchor }) => {
  return (
    <g>
      <text
        x={x}
        y={y}
        textAnchor={textAnchor}
        fill={"#d1d5dc"}
        fontSize={12}
        fontWeight="500"
      >
        {payload.value}
      </text>
    </g>
  );
};

export default function StyledRadar({ data, colorCode, heading }) {
  return (
    <div className="w-full text-center">
      <ResponsiveContainer width="100%" height={250}>
        <RadarChart data={data} outerRadius="80%" cx="50%" cy="50%">
          <PolarGrid stroke="#666" />
          <PolarAngleAxis dataKey="name" tick={<CustomAngleTick />} />
          <PolarRadiusAxis domain={[0, 10]} tick={false} axisLine={false} />
          <Radar
            dataKey="rating"
            stroke={colorCode}
            fill={colorCode}
            fillOpacity={0.6}
          />
          <Tooltip
            isAnimationActive={false}
            contentStyle={{ backgroundColor: "black", border: "none" }}
            itemStyle={{ color: "white" }}
            labelStyle={{ color: "white" }}
          />
        </RadarChart>
      </ResponsiveContainer>
      <p className="mt-4 font-bold text-white">{heading}</p>
    </div>
  );
}
