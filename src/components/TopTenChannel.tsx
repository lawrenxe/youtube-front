import React, { useEffect, useState } from "react";
import { ChannelCount } from "../hooks/services";
import ReportButton from "./ReportButton";
import Transition from "./Transition";

interface TTCProps {
  top_10_channel: ChannelCount[];
  handleSectionChange: (id: string) => void;
}

const TopTenChannel = ({ top_10_channel, handleSectionChange }: TTCProps) => {
  const [loaded, setLoaded] = useState(false);
  const handleLoad = () => {
    setLoaded(true);
  };

  useEffect(() => {
    handleLoad();
  }, []);
  return (
    <div className="float-left flex h-screen w-full flex-col items-start justify-center px-10">
      <Transition delay={0} time={3} loaded={loaded}>
        <h2 className="text-2xl font-bold text-white">This is your</h2>
      </Transition>
      <Transition delay={1} time={3} loaded={loaded}>
        <h2 className="inline-block bg-gradient-to-r from-red-400 via-red-500 to-red-800 bg-clip-text text-3xl font-bold text-transparent">
          Top Channels
        </h2>
      </Transition>
      <Transition delay={2} time={3} loaded={loaded}>
        <h2 className="text-2xl font-bold text-white">of the year</h2>
      </Transition>

      <div className="my-5 max-h-[50%] w-full overflow-scroll no-scrollbar">
        <Transition delay={3} time={3} loaded={loaded}>
          <div className="flex flex-col ">
            {top_10_channel.map((channel, index) => {
              return (
                <div
                  key={index}
                  className="flex w-full flex-row justify-between "
                >
                  <div className="flex w-10/12 flex-row">
                    <h2 className="text-lg font-bold text-white">
                      {index + 1}.
                    </h2>
                    <h2 className="break-all text-lg font-medium text-white">
                      {channel.channel}
                    </h2>
                  </div>
                  <h2 className="text-lg font-bold text-white">
                    {channel.count}{" "}
                  </h2>
                </div>
              );
            })}
          </div>
        </Transition>
      </div>

      <Transition delay={4} time={3} loaded={loaded}>
        <ReportButton
          text="Next"
          color="orange-500"
          toLink="report-6"
          handleSectionChange={handleSectionChange}
        />
      </Transition>
    </div>
  );
};

export default TopTenChannel;
