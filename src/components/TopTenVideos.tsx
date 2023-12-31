import React, { useEffect, useState } from "react";
import { TitleCount } from "../hooks/services";
import ReportButton from "./ReportButton";
import Transition from "./Transition";

interface TTVProps {
  top_10_watched: TitleCount[];
  handleSectionChange: (id: string) => void;
}

const TopTenVideos = ({ top_10_watched, handleSectionChange }: TTVProps) => {
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
        <h2 className="text-2xl font-bold text-white">
          Here we go! This is your
        </h2>
      </Transition>
      <Transition delay={1} time={3} loaded={loaded}>
        <h2 className="inline-block bg-gradient-to-r from-yellow-300 via-orange-500 to-red-400 bg-clip-text text-3xl font-bold text-transparent">
          Top Videos
        </h2>
      </Transition>
      <Transition delay={2} time={3} loaded={loaded}>
        <h2 className="text-2xl font-bold text-white">of the year</h2>
      </Transition>
      <div className="my-5 max-h-[50%] w-full overflow-scroll no-scrollbar">
        <Transition delay={4} time={3} loaded={loaded}>
          <div className="flex  flex-col overflow-scroll no-scrollbar">
            {top_10_watched.map((video, index) => {
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
                      {video.title}
                    </h2>
                  </div>
                  <h2 className="text-lg font-bold text-white">
                    {video.count}{" "}
                  </h2>
                </div>
              );
            })}
          </div>
        </Transition>
      </div>
      <Transition delay={5} time={3} loaded={loaded}>
        <ReportButton
          text="Next"
          toLink="report-4"
          color="green-500"
          handleSectionChange={handleSectionChange}
        />
      </Transition>
    </div>
  );
};

export default TopTenVideos;
