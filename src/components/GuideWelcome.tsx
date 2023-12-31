import React, { useEffect, useState } from "react";
import Transition from "./Transition";
import ReportButton from "./ReportButton";

const GuideWelcome = () => {
  const [loaded, setLoaded] = useState(false);
  const handleLoad = () => {
    setLoaded(true);
  };

  useEffect(() => {
    handleLoad();
  }, []);
  return (
    <div>
      {/* <Transition delay={0} time={3} loaded={loaded}>
        <h1 className={"my-2 text-2xl font-bold text-white"}>
          Happy New Year.
        </h1>
      </Transition> */}

      <Transition delay={0} time={3} loaded={loaded}>
        <h1 className={"my-2 text-2xl font-bold text-white"}>
          Ready to get your
        </h1>
      </Transition>
      <Transition delay={1} time={3} loaded={loaded}>
        <h1
          className={
            " my-2 inline-block bg-gradient-to-r from-yellow-300 via-red-200 to-red-400 bg-clip-text text-3xl text-3xl font-bold font-bold text-transparent "
          }
        >
          YouTube History Report
        </h1>
      </Transition>

      <Transition delay={3} time={3} loaded={loaded}>
        <h1 className={"my-2 text-2xl font-bold text-white"}>
          for you and you only?
        </h1>
      </Transition>
      <Transition delay={4} time={3} loaded={loaded}>
        <ReportButton
          toLink={"guide-2"}
          color={"red-500"}
          text={"Get Started"}
          handleSectionChange={function (id: string): void {
            throw new Error("Function not implemented.");
          }}
        />
      </Transition>
    </div>
  );
};

export default GuideWelcome;
