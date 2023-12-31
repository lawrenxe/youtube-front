import { useEffect, useState } from "react";
import Transition from "./Transition";
import ReportButton from "./ReportButton";

const GuideStep7 = () => {
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
          Welcome Back
        </h1>
      </Transition>
      <Transition delay={1} time={3} loaded={loaded}>
        <h1 className={"text-xl font-bold text-transparent text-white"}>
          Now that you have the email.
        </h1>
      </Transition>

      <Transition delay={1} time={3} loaded={loaded}>
        <h2 className="mt-10 text-xl font-bold text-white">
          Go to your mail app, click "Download your files".
        </h2>
      </Transition>
      <Transition delay={2} time={3} loaded={loaded}>
        <h2 className="mt-5 text-xl font-bold text-white">
          Download your latest export.
        </h2>
      </Transition>
      <Transition delay={3} time={3} loaded={loaded}>
        <h2 className="mt-5 text-xl font-bold text-white">
          Open the "File" app, and find where you save the file from Google.
        </h2>
      </Transition>

      <Transition delay={4} time={3} loaded={loaded}>
        <h2 className="mt-5 text-xl font-bold text-white">
          Click the zip file, you will find a unzipped folder next to you.
        </h2>
      </Transition>

      <Transition delay={4} time={3} loaded={loaded}>
        <ReportButton
          toLink={"guide-10"}
          color={"green-500"}
          text={"I am back"}
        />
      </Transition>
    </div>
  );
};

export default GuideStep7;
