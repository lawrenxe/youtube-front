import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { ChannelCount } from "../hooks/services";
import ReportButton from "./ReportButton";
import Transition from "./Transition";

interface COVProps {
  channel_count: number;
  top_10_channel: ChannelCount[];
}

const ChannelOverview = ({ channel_count, top_10_channel }: COVProps) => {
  const [loaded, setLoaded] = useState(false);
  const handleLoad = () => {
    setLoaded(true);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div className="flex flex-col items-start gap-y-2 px-10 ">
      <Transition time={3} delay={0} loaded={loaded}>
        <h1 className="text-xl font-bold text-white">
          You have watched videos from
        </h1>
      </Transition>
      <Transition time={3} delay={2} loaded={loaded}>
        <div className="flex flex-row items-end ">
          <CountUp
            delay={1}
            start={channel_count * 0.7}
            end={channel_count}
            duration={3}
            className="inline-block w-24 bg-gradient-to-r from-yellow-300 via-orange-200 to-red-300 bg-clip-text px-0 text-3xl font-bold text-transparent"
          />
          <h1 className="text-xl font-bold text-white">channels &nbsp;</h1>
          <h1 className="text-xl font-bold text-white">this year.</h1>
        </div>
      </Transition>
      <Transition time={3} delay={4} loaded={loaded}>
        <h2 className="mt-10 text-xl font-bold text-white">
          Among these, you played
        </h2>
      </Transition>
      <Transition time={3} delay={6} loaded={loaded}>
        <div className="flex flex-row items-end">
          <h2 className="text-3xl font-bold text-white">
            {top_10_channel[0].count}&nbsp;
          </h2>
          <h2 className="text-xl font-bold text-white">
            times of videos from{" "}
          </h2>
        </div>
      </Transition>
      <Transition time={3} delay={7} loaded={loaded}>
        <div className="flex flex-row">
          <h2 className="inline-block bg-gradient-to-r from-yellow-300  via-orange-200 to-red-300 bg-clip-text text-2xl font-bold text-transparent">
            {top_10_channel[0].channel}
          </h2>
          <h2 className="text-2xl font-bold text-white">.</h2>
        </div>
      </Transition>
      <Transition time={3} delay={9} loaded={loaded}>
        <div className="mt-10 flex flex-row items-end">
          <h2 className="text-xl font-bold text-white">A&nbsp; </h2>
          <h2 className="text-3xl font-bold text-white"> BIG fan&nbsp; </h2>
          <h2 className="animate-spin text-2xl font-bold text-white">𖣘</h2>
          <h2 className="text-xl font-bold text-white">, you are.</h2>
        </div>
      </Transition>
      <Transition time={3} delay={10} loaded={loaded}>
        <ReportButton
          color="yellow-400"
          text="Your Top Channels"
          toLink="report-5"
        />
      </Transition>
    </div>
  );
};

export default ChannelOverview;
