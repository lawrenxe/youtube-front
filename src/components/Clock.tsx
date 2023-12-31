import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { HourCount } from "../hooks/services";

interface CProps {
  data: HourCount[];
  watch_count: number;
}

const Clock = ({ data, watch_count }: CProps) => {
  return (
    <div className="m-0 flex aspect-square w-9/12 items-center justify-center border-black ">
      <ResponsiveContainer>
        <RadarChart
          className=" m-0 flex  items-center justify-center p-3"
          outerRadius="80%"
          data={data}
        >
          <PolarGrid gridType="circle" strokeWidth={0} />
          <PolarAngleAxis
            dataKey="hour"
            stroke="white"
            fontSize={15}
            fontWeight={500}
            axisLine={false}
            tickLine={false}
          />
          <Radar
            name="1"
            dataKey="count"
            stroke="#fff"
            fill="#fff"
            fillOpacity={0.6}
            strokeWidth={3}
          />
          <Tooltip
            labelStyle={{ display: "none" }}
            itemStyle={{
              color: "white",
              fontSize: 15,
              fontWeight: 500,
            }}
            contentStyle={{
              border: "none",
              background: "none",
            }}
            formatter={(value: number) => [
              ((value / watch_count) * 100).toFixed(2) + " %",
            ]}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Clock;
