import React, { useEffect, useState } from "react";
import Transition from "./Transition";
import ReportButton from "./ReportButton";

const GuideStep6 = () => {
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
          Sit tight
        </h1>
      </Transition>
      <Transition delay={1} time={3} loaded={loaded}>
        <h1 className={"text-xl font-bold text-transparent text-white"}>
          You are only one step away.
        </h1>
      </Transition>

      <Transition delay={1} time={3} loaded={loaded}>
        <h2 className="mt-10 text-xl font-bold text-white">
          You will receive an email from Google in a few minutes.
        </h2>
      </Transition>
      <Transition delay={2} time={3} loaded={loaded}>
        <h2 className="mt-5 text-xl font-bold text-white">
          It will contain a link to download the file we need for today.
        </h2>
      </Transition>

      <Transition delay={3} time={3} loaded={loaded}>
        <h2 className="mt-5 text-xl font-bold text-white">
          Don't close this tab, see you soon!
        </h2>
      </Transition>

      <Transition delay={4} time={3} loaded={loaded}>
        <ReportButton
          toLink={"guide-9"}
          color={"green-500"}
          text={"I am back"}
        />
      </Transition>
    </div>
  );
};

export default GuideStep6;
