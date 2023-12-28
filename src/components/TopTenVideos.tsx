import React from "react";
import { TitleCount } from "../hooks/services";

interface TTVProps {
  top_10_watched: TitleCount[];
}

const TopTenVideos = ({ top_10_watched }: TTVProps) => {
  return (
    <div className="mx-10 flex flex-col  gap-y-6">
      {top_10_watched.map((video, index) => {
        return (
          <div className="flex w-10/12 flex-row justify-between">
            <div className="flex w-10/12 flex-row">
              <h2 className="text-3xl font-medium text-white">{index + 1}.</h2>
              <h2 className="text-3xl font-medium text-white">{video.title}</h2>
            </div>
            <h2 className="text-3xl font-medium text-white">{video.count} </h2>
          </div>
        );
      })}
    </div>
  );
};

export default TopTenVideos;
