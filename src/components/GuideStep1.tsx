import React, { useEffect, useState } from "react";
import Transition from "./Transition";
import ReportButton from "./ReportButton";

const GuideStep1 = () => {
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
        <h1
          className={
            "inline-block bg-gradient-to-r from-yellow-300 via-yellow-500 to-red-400 bg-clip-text text-3xl font-bold text-transparent"
          }
        >
          Step 1
        </h1>
      </Transition>

      <Transition delay={1} time={3} loaded={loaded}>
        <h2 className="mt-10 text-xl font-bold text-white">
          Head to{" "}
          <a
            className="text-xl font-bold text-white underline"
            href="https://takeout.google.com"
            target="_blank"
          >
            Google Takeout
          </a>{" "}
          and Log in with your Google Account.
        </h2>
      </Transition>

      <Transition delay={2} time={3} loaded={loaded}>
        <ReportButton toLink={"guide-4"} color={"green-500"} text={"Next"} />
      </Transition>
    </div>
  );
};

export default GuideStep1;
