import React, { useEffect, useState } from "react";
import Transition from "./Transition";
import ReportButton from "./ReportButton";

const GuideStart = () => {
  const [loaded, setLoaded] = useState(false);
  const handleLoad = () => {
    setLoaded(true);
  };

  useEffect(() => {
    handleLoad();
  }, []);
  return (
    <div>
      <Transition delay={0} time={3} loaded={loaded}>
        <h1 className={"my-2 text-3xl font-bold text-white"}>
          Before we get started,
        </h1>
      </Transition>
      <Transition delay={1} time={3} loaded={loaded}>
        <h1 className={"my-2 text-2xl font-bold text-white"}>
          I need a favor from you.
        </h1>
      </Transition>

      <Transition delay={3} time={3} loaded={loaded}>
        <h1 className={"mt-10 text-xl font-bold text-white"}>
          Google did not provide an API for developers to analyse your YouTube
          history directly.
        </h1>
      </Transition>
      <Transition delay={6} time={3} loaded={loaded}>
        <h1 className={"mt-5 text-xl font-bold text-white"}>
          To get a report, a file from Google is needed from you.
        </h1>
      </Transition>
      <Transition delay={8} time={3} loaded={loaded}>
        <h1 className={"mt-5 text-xl font-bold text-white"}>
          Don't worry, I will guide you through this.
        </h1>
      </Transition>
      <Transition delay={10} time={3} loaded={loaded}>
        <h1 className={"mt-5 text-xl font-bold text-white"}>
          And most importantly, it is safe🔒.
        </h1>
      </Transition>

      <Transition delay={12} time={3} loaded={loaded}>
        <ReportButton
          toLink={"guide-3"}
          color={"green-500"}
          text={"Show me how"}
          handleSectionChange={function (id: string): void {
            throw new Error("Function not implemented.");
          }}
        />
      </Transition>
    </div>
  );
};

export default GuideStart;
