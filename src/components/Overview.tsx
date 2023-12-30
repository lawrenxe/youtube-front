import React from "react";
import { TitleCount } from "../hooks/services";
import CountUp from "react-countup";
import ReportButton from "./ReportButton";

interface OVProps {
  watch_count: number;
  title_count: number;
  top_10_watched: TitleCount[];
  handleSectionChange: (id: string) => void;
}

const Overview = ({
  watch_count,
  title_count,
  top_10_watched,
  handleSectionChange,
}: OVProps) => {
  return (
    <div className="flex flex-col items-start gap-y-2 px-10">
      <h1 className="text-xl font-medium text-white">
        In this year, you have watched
      </h1>
      <div className="flex flex-row items-end gap-x-2">
        <CountUp
          enableScrollSpy={true}
          start={title_count * 0.7}
          end={title_count}
          duration={2}
          className="w-20 text-3xl font-medium text-white"
        />
        <h1 className="text-xl font-medium text-white">videos.</h1>
      </div>

      <h2 className="text-xl font-medium text-white">
        Among those videos, your favorite must be
      </h2>
      <img
        src={
          "https://img.youtube.com/vi/" +
          top_10_watched[0].title_id +
          "/maxresdefault.jpg"
        }
        className="my w-3/4"
      />
      <h2 className="bg-gradient-to-r from-[#F4F269] via-[#A8D26D] to-[#5CB270] bg-clip-text text-xl font-bold text-transparent text-white">
        {top_10_watched[0].title},
      </h2>
      <h2 className="text-xl font-medium text-white">because you watched it</h2>

      <div className="flex flex-row">
        <h2 className="text-xl font-medium text-white">Oo</h2>
        <div className="justify flex w-2 flex-row justify-end overflow-hidden">
          <h2 className="text-xl font-medium text-white">o</h2>
        </div>
        <div className="justify flex w-2 flex-row justify-end overflow-hidden">
          <h2 className="text-xl font-medium text-white">o</h2>
        </div>
        <div className="justify flex w-1 flex-row justify-end overflow-hidden">
          <h2 className="text-xl font-medium text-white">o</h2>
        </div>
        <h2 className="text-xl font-medium text-white">ver and ov</h2>
        <div className="justify flex w-2 flex-row justify-end overflow-hidden">
          <h2 className="text-xl font-medium text-white">v</h2>
        </div>
        <div className="justify flex w-2 flex-row justify-end overflow-hidden">
          <h2 className="text-xl font-medium text-white">v</h2>
        </div>
        <div className="justify flex w-1 flex-row justify-end overflow-hidden">
          <h2 className="text-xl font-medium text-white">v</h2>
        </div>
        <h2 className="text-xl font-medium text-white">er again...</h2>
      </div>

      <ReportButton
        text="Check your Top 10 Videos"
        color="blue-400"
        toLink="report-3"
        handleSectionChange={handleSectionChange}
      />
    </div>
  );
};

export default Overview;
