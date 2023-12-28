import React from "react";
import { AnnualHistory } from "../hooks/services";
import ReportWelcome from "./ReportWelcome";
import AnnualReportSection from "./AnnualReportSection";
import Overview from "./Overview";
import TopTenVideos from "./TopTenVideos";

interface ARProps {
  annualReport: AnnualHistory | null;
}

const AnnualReport = ({ annualReport }: ARProps) => {
  return (
    <div className="no-scrollbar max-h-screen snap-y snap-mandatory overflow-y-scroll">
      <AnnualReportSection bgColor="bg-gray-900" id="report-welcome">
        <ReportWelcome />
      </AnnualReportSection>

      <AnnualReportSection bgColor="bg-green-900" id="report-2">
        {annualReport && (
          <Overview
            watch_count={annualReport?.watch_count}
            title_count={annualReport?.title_count}
            top_10_watched={annualReport?.top_10_watched}
          />
        )}
      </AnnualReportSection>

      <AnnualReportSection bgColor="bg-blue-900" id="report-3">
        {annualReport && (
          <TopTenVideos top_10_watched={annualReport.top_10_watched} />
        )}
      </AnnualReportSection>
    </div>
  );
};

export default AnnualReport;
