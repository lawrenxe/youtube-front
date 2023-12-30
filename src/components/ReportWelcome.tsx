import React from "react";
import ReportButton from "./ReportButton";

interface RWProps {
  handleSectionChange: (id: string) => void;
}

const ReportWelcome = ({ handleSectionChange }: RWProps) => {
  return (
    <div className="flex flex-col items-center gap-y-10">
      <h1 className="text-2xl font-medium text-white">
        This is your Recap of 2023
      </h1>

      <ReportButton
        color="red-500"
        toLink="report-2"
        text="Jump in"
        handleSectionChange={handleSectionChange}
      />
    </div>
  );
};

export default ReportWelcome;
