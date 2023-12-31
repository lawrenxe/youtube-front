import React, { useEffect, useState } from "react";
import Transition from "./Transition";
import ReportButton from "./ReportButton";

const GuideStep4 = () => {
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
          Step 4
        </h1>
      </Transition>

      <Transition delay={1} time={3} loaded={loaded}>
        <h2 className="mt-10 text-xl font-bold text-white">
          Click "Multiple formats", locate "history".
        </h2>
      </Transition>
      <Transition delay={2} time={3} loaded={loaded}>
        <h2 className="mt-5 text-xl font-bold text-white">
          Change from HTML to JSON, and click OK.
        </h2>
      </Transition>

      <Transition delay={4} time={3} loaded={loaded}>
        <ReportButton toLink={"guide-7"} color={"green-500"} text={"Next"} />
      </Transition>
    </div>
  );
};

export default GuideStep4;
