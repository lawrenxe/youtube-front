import React from "react";
import { MonthCount } from "../hooks/services";
import CountUp from "react-countup";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import ReportButton from "./ReportButton";

interface MProps {
  count_item_by_month: MonthCount[];
  handleSectionChange: (id: string) => void;
}

const scrollToNext = (id: string) => {
  const nextElement = document.getElementById(id);
  if (nextElement) nextElement.scrollIntoView({ behavior: "smooth" });
};

const getMonthCounts = (monthCount: MonthCount[]): MonthCount[] => {
  const sortedMonthCount = [...monthCount];
  sortedMonthCount.sort((a, b) => a.month - b.month);
  return sortedMonthCount;
};

const numberToMonth = (monthNumber: number): string => {
  const monthNames: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  if (monthNumber >= 1 && monthNumber <= 12) {
    return monthNames[monthNumber - 1];
  } else {
    return "Invalid month number";
  }
};

const Month = ({ count_item_by_month, handleSectionChange }: MProps) => {
  return (
    <div className="flex flex-col items-start px-10">
      <div className="flex flex-row items-end">
        <h1 className="text-xl font-medium text-white">In &nbsp;</h1>
        <h1 className="inline-block bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-300 bg-clip-text text-xl font-medium text-transparent text-white">
          {numberToMonth(count_item_by_month[0].month)}
        </h1>
        <h1 className="text-xl font-medium text-white">, you watched</h1>
      </div>
      <div className="flex flex-row items-end gap-x-2">
        <CountUp
          start={count_item_by_month[0].count * 0.7}
          end={count_item_by_month[0].count}
          duration={2}
          className="text-3xl font-bold text-white"
        />
        <h1 className="text-xl font-medium text-white">videos.</h1>
      </div>
      <h1 className="text-xl font-medium text-white">That's on average </h1>
      <div className="flex-end flex items-end">
        <h1 className="text-3xl font-medium text-white">
          {(count_item_by_month[0].count / 30).toFixed(1)}&nbsp;
        </h1>
        <h1 className="text-xl font-medium text-white"> videos per day</h1>
      </div>

      <h2 className="text-xl font-medium text-white">
        Let's break down to each month.
      </h2>
      <div className="my-5 flex aspect-video w-full items-center justify-center border-black ">
        <ResponsiveContainer>
          <LineChart
            data={getMonthCounts(count_item_by_month)}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis
              dataKey="month"
              stroke="#FFF"
              strokeWidth={0}
              fontSize={10}
              fontWeight={500}
            />

            <YAxis
              stroke="#FFF"
              strokeWidth={0}
              fontSize={10}
              fontWeight={500}
              width={15}
            />

            <Line
              type="monotone"
              dataKey="count"
              stroke="#f87171"
              strokeWidth={5}
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
              formatter={(value, name, props) => [value + " plays"]}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <ReportButton
        text="Next"
        color="red-500"
        toLink="report-7"
        handleSectionChange={handleSectionChange}
      />
    </div>
  );
};

export default Month;
