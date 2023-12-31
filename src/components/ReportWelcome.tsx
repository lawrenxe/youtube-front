import React, { useEffect, useState } from "react";
import ReportButton from "./ReportButton";
import Transition from "./Transition";

interface RWProps {
  handleSectionChange: (id: string) => void;
}

const ReportWelcome = ({ handleSectionChange }: RWProps) => {
  const [loaded, setLoaded] = useState(false);
  const handleLoad = () => {
    setLoaded(true);
  };

  useEffect(() => {
    handleLoad();
  }, []);
  return (
    <div className="flex flex-col items-center gap-y-10">
      <Transition delay={0} time={3} loaded={loaded}>
        <h1 className="text-2xl font-bold text-white">
          This is your Recap of 2023
        </h1>
      </Transition>
      <Transition delay={1} time={3} loaded={loaded}>
        <ReportButton
          color="red-500"
          toLink="report-2"
          text="Jump in"
          handleSectionChange={handleSectionChange}
        />
      </Transition>
    </div>
  );
};

export default ReportWelcome;
