import React from "react";
import { ChannelCount } from "../hooks/services";
import ReportButton from "./ReportButton";

interface TTCProps {
  top_10_channel: ChannelCount[];
  handleSectionChange: (id: string) => void;
}

const TopTenChannel = ({ top_10_channel, handleSectionChange }: TTCProps) => {
  return (
    <div className="float-left flex h-screen w-full flex-col items-start justify-center px-10">
      <h2 className="text-2xl font-bold text-white">This is your</h2>

      <h2 className="inline-block bg-gradient-to-r from-red-400 via-red-500 to-red-800 bg-clip-text text-3xl font-bold text-transparent">
        Top Channels
      </h2>
      <h2 className="text-2xl font-bold text-white">of the year</h2>
      <div className="my-5 flex max-h-[40%] w-full flex-col overflow-scroll py-5 no-scrollbar">
        {top_10_channel.map((channel, index) => {
          return (
            <div className="flex w-full flex-row justify-between ">
              <div className="flex w-10/12 flex-row">
                <h2 className="text-lg font-bold text-white">{index + 1}.</h2>
                <h2 className="text-lg font-medium text-white">
                  {channel.channel}
                </h2>
              </div>
              <h2 className="text-lg font-bold text-white">{channel.count} </h2>
            </div>
          );
        })}
      </div>

      <ReportButton
        text="Next"
        color="orange-500"
        toLink="report-6"
        handleSectionChange={handleSectionChange}
      />
    </div>
  );
};

export default TopTenChannel;
