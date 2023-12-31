import React, { useEffect, useState } from "react";
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
import Transition from "./Transition";

interface MProps {
  count_item_by_month: MonthCount[];
}

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

const Month = ({ count_item_by_month }: MProps) => {
  const [loaded, setLoaded] = useState(false);
  const handleLoad = () => {
    setLoaded(true);
  };

  useEffect(() => {
    handleLoad();
  }, []);
  return (
    <div className="flex flex-col items-start px-10">
      <Transition delay={0} time={3} loaded={loaded}>
        <div className="flex flex-row items-end">
          <h1 className="text-xl font-bold text-white">In &nbsp;</h1>
          <h1 className="inline-block bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-400 bg-clip-text text-2xl font-bold text-transparent">
            {numberToMonth(count_item_by_month[0].month)}
          </h1>
          <h1 className="text-xl font-bold text-white">, you watched</h1>
        </div>
      </Transition>
      <Transition delay={1} time={3} loaded={loaded}>
        <div className="flex flex-row items-end gap-x-2">
          <CountUp
            delay={1}
            start={count_item_by_month[0].count * 0.7}
            end={count_item_by_month[0].count}
            duration={2}
            className="text-3xl font-bold text-white"
          />
          <h1 className="text-xl font-bold text-white">videos.</h1>
        </div>
      </Transition>
      <Transition delay={3} time={3} loaded={loaded}>
        <h1 className="mt-5 text-xl font-bold text-white">
          That's on average{" "}
        </h1>
      </Transition>
      <Transition delay={4} time={3} loaded={loaded}>
        <div className="flex-end flex items-end">
          <h1 className="inline-block bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-400 bg-clip-text text-3xl font-bold text-transparent">
            {(count_item_by_month[0].count / 30).toFixed(1)}&nbsp;
          </h1>
          <h1 className="text-xl font-bold text-white"> videos per day</h1>
        </div>
      </Transition>

      <Transition delay={7} time={3} loaded={loaded}>
        <h2 className="mt-5 text-xl font-bold text-white">
          Let's break down to each month.
        </h2>
      </Transition>

      <div className="my-5 flex aspect-video w-full items-center justify-center border-black ">
        <ResponsiveContainer
          className={`${loaded ? "opacity-100" : "opacity-0"}`}
          style={{ transitionDelay: "8s", transitionDuration: "3s" }}
        >
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
              stroke="#fcd34d
              "
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

      <Transition delay={11} time={3} loaded={loaded}>
        <ReportButton text="Next" color="red-500" toLink="report-7" />
      </Transition>
    </div>
  );
};

export default Month;
