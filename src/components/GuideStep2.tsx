import React, { useEffect, useState } from "react";
import Transition from "./Transition";
import ReportButton from "./ReportButton";

const GuideStep2 = () => {
  const [loaded, setLoaded] = useState(false);
  const handleLoad = () => {
    setLoaded(true);
  };

  useEffect(() => {
    handleLoad();
  }, []);
  return (
    <div className="flex h-full w-full flex-col justify-center">
      <Transition delay={0} time={3} loaded={loaded}>
        <h1
          className={
            "inline-block bg-gradient-to-r from-yellow-300 via-yellow-500 to-red-400 bg-clip-text text-3xl font-bold text-transparent"
          }
        >
          Step 2
        </h1>
      </Transition>

      <Transition delay={1} time={3} loaded={loaded}>
        <h2 className="mt-10 text-xl font-bold text-white">
          Select "deselect all."
        </h2>
      </Transition>
      <Transition delay={2} time={3} loaded={loaded}>
        <h2 className="mt-5 text-xl font-bold text-white">
          Scroll to the bottom, choose YouTube and YouTube Music.
        </h2>
      </Transition>
      <div className="mt-5 h-[40%]">
        <Transition delay={3} time={3} loaded={loaded} className="h-full">
          <img src="src/assets/Step2.gif" alt="" className="h-full" />
        </Transition>
      </div>

      <Transition delay={4} time={3} loaded={loaded}>
        <ReportButton toLink={"guide-5"} color={"green-500"} text={"Next"} />
      </Transition>
    </div>
  );
};

export default GuideStep2;
