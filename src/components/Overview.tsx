import React, { useEffect, useState } from "react";
import { TitleCount } from "../hooks/services";
import CountUp from "react-countup";
import ReportButton from "./ReportButton";
import Transition from "./Transition";

interface OVProps {
  watch_count: number;
  title_count: number;
  top_10_watched: TitleCount[];
}

const Overview = ({ watch_count, title_count, top_10_watched }: OVProps) => {
  const [loaded, setLoaded] = useState(false);
  const handleLoad = () => {
    setLoaded(true);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div className="flex flex-col items-start gap-y-2 px-10">
      <Transition delay={0} time={3} loaded={loaded}>
        <h1 className="text-xl font-bold text-white">
          In this year, you have watched
        </h1>
      </Transition>
      <Transition delay={1} time={3} loaded={loaded}>
        <div className="flex flex-row items-end gap-x-2">
          <CountUp
            delay={1}
            start={title_count * 0.7}
            end={title_count}
            duration={2}
            className=" text-3xl font-bold text-white"
          />

          <h1 className="text-xl font-bold text-white">videos.</h1>
        </div>
      </Transition>

      <Transition delay={3} time={3} loaded={loaded}>
        <h2 className="text-xl font-bold text-white">
          Among those videos, your favorite must be
        </h2>
      </Transition>
      <Transition delay={5} time={3} loaded={loaded}>
        <img
          src={
            "https://img.youtube.com/vi/" +
            top_10_watched[0].title_id +
            "/maxresdefault.jpg"
          }
          className=" mt-3 w-3/4 rounded-lg"
        />
        <h2
          className="mt-3 inline-block break-all bg-gradient-to-r from-[#F4F269] via-[#A8D26D] to-[#5CB270] bg-clip-text text-xl font-bold text-transparent
        "
        >
          {top_10_watched[0].title},
        </h2>
      </Transition>
      <Transition delay={8} time={3} loaded={loaded}>
        <h2 className="mt-3 text-xl font-bold text-white">
          because you watched it
        </h2>
      </Transition>
      <Transition delay={10} time={3} loaded={loaded}>
        <div className="flex flex-row">
          <h2 className="text-xl font-bold text-white">Oo</h2>
          <div className="justify flex w-2 flex-row justify-end overflow-hidden">
            <h2 className="text-xl font-bold text-white">o</h2>
          </div>
          <div className="justify flex w-2 flex-row justify-end overflow-hidden">
            <h2 className="text-xl font-bold text-white">o</h2>
          </div>
          <div className="justify flex w-1 flex-row justify-end overflow-hidden">
            <h2 className="text-xl font-bold text-white">o</h2>
          </div>
          <h2 className="text-xl font-bold text-white">ver and ov</h2>
          <div className="justify flex w-2 flex-row justify-end overflow-hidden">
            <h2 className="text-xl font-bold text-white">v</h2>
          </div>
          <div className="justify flex w-2 flex-row justify-end overflow-hidden">
            <h2 className="text-xl font-bold text-white">v</h2>
          </div>
          <div className="justify flex w-1 flex-row justify-end overflow-hidden">
            <h2 className="text-xl font-bold text-white">v</h2>
          </div>
          <h2 className="text-xl font-bold text-white">er again...</h2>
        </div>
      </Transition>
      <Transition delay={13} time={3} loaded={loaded}>
        <ReportButton
          text="Check your Top 10 Videos"
          color="blue-400"
          toLink="report-3"
        />
      </Transition>
    </div>
  );
};

export default Overview;
