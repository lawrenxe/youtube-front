import React from "react";
import { TitleCount } from "../hooks/services";
import ReportButton from "./ReportButton";

interface TTVProps {
  top_10_watched: TitleCount[];
  handleSectionChange: (id: string) => void;
}

const TopTenVideos = ({ top_10_watched, handleSectionChange }: TTVProps) => {
  return (
    <div className="float-left flex h-screen w-full flex-col items-start justify-center px-10">
      <h2 className="text-2xl font-bold text-white">
        Here we go! This is your
      </h2>

      <h2 className="inline-block bg-gradient-to-r from-yellow-300 via-orange-500 to-red-400 bg-clip-text text-3xl font-bold text-transparent">
        Top Videos
      </h2>

      <h2 className="text-2xl font-bold text-white">of the year</h2>
      <div className="my-5 flex max-h-[40%] w-full flex-col overflow-scroll py-5 no-scrollbar">
        {top_10_watched.map((video, index) => {
          return (
            <div className="flex w-full flex-row justify-between ">
              <div className="flex w-10/12 flex-row">
                <h2 className="text-lg font-bold text-white">{index + 1}.</h2>
                <h2 className="text-lg font-medium text-white">
                  {video.title}
                </h2>
              </div>
              <h2 className="text-lg font-bold text-white">{video.count} </h2>
            </div>
          );
        })}
      </div>

      <ReportButton
        text="Next"
        toLink="report-4"
        color="green-500"
        handleSectionChange={handleSectionChange}
      />
    </div>
  );
};

export default TopTenVideos;
