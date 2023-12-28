import React from "react";
import { TitleCount } from "../hooks/services";
import CountUp from "react-countup";

interface OVProps {
  watch_count: number;
  title_count: number;
  top_10_watched: TitleCount[];
}

const scrollToNext = (id: string) => {
  const nextElement = document.getElementById(id);
  if (nextElement) nextElement.scrollIntoView({ behavior: "smooth" });
};

const Overview = ({ watch_count, title_count, top_10_watched }: OVProps) => {
  return (
    <div className="flex flex-col items-start gap-y-10 px-10">
      <div className="flex flex-col items-start gap-y-5">
        <h1 className="text-5xl font-medium text-white">
          In this year, you have watched
        </h1>
        <div className="flex flex-row items-end gap-x-5">
          <CountUp
            start={title_count * 0.7}
            end={title_count}
            duration={2}
            className="text-7xl font-medium text-white"
          />
          <h1 className="text-5xl font-medium text-white">videos.</h1>
        </div>
      </div>

      <div className="flex flex-col gap-y-3">
        <h2 className="text-3xl font-medium text-white">
          Among those videos, your favorite must be
        </h2>
        <img
          src={
            "https://img.youtube.com/vi/" +
            top_10_watched[0].title_id +
            "/maxresdefault.jpg"
          }
          className="my-5 w-3/4"
        />
        <h2 className="text-3xl font-medium text-white">
          {top_10_watched[0].title},
        </h2>
        <h2 className="text-3xl font-medium text-white">
          because you watched it
        </h2>

        <div className="flex flex-row">
          <h2 className="text-4xl font-medium text-white">O</h2>
          <div className="justify flex w-3 flex-row justify-end overflow-hidden">
            <h2 className="text-4xl font-medium text-white">o</h2>
          </div>
          <div className="justify flex w-3 flex-row justify-end overflow-hidden">
            <h2 className="text-4xl font-medium text-white">o</h2>
          </div>
          <div className="justify flex w-3 flex-row justify-end overflow-hidden">
            <h2 className="text-4xl font-medium text-white">o</h2>
          </div>
          <h2 className="text-4xl font-medium text-white">ver and Ov</h2>
          <div className="justify flex w-3 flex-row justify-end overflow-hidden">
            <h2 className="text-4xl font-medium text-white">v</h2>
          </div>
          <div className="justify flex w-3 flex-row justify-end overflow-hidden">
            <h2 className="text-4xl font-medium text-white">v</h2>
          </div>
          <div className="justify flex w-2 flex-row justify-end overflow-hidden">
            <h2 className="text-4xl font-medium text-white">v</h2>
          </div>
          <h2 className="text-4xl font-medium text-white">er again...</h2>
        </div>
      </div>
      <button
        className="rounded-2xl border-2 bg-red-600 px-5 text-xl font-medium text-white"
        onClick={() => scrollToNext("report-3")}
      >
        Check your Top 10 Videos ▶
      </button>
    </div>
  );
};

export default Overview;
