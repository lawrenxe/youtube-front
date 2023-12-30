import React, { SyntheticEvent, useEffect, useState } from "react";
import { AnnualHistory } from "../hooks/services";
import ReportWelcome from "./ReportWelcome";
import AnnualReportSection from "./AnnualReportSection";
import Overview from "./Overview";
import TopTenVideos from "./TopTenVideos";
import ChannelOverview from "./ChannelOverview";
import TopTenChannel from "./TopTenChannel";
import Month from "./Month";
import { TimePeriod } from "./TimePeriod";

interface ARProps {
  annualReport: AnnualHistory | null;
}

const AnnualReport = ({ annualReport }: ARProps) => {
  const [currentSection, setCurrentSection] = useState<string>("report-1");

  const handleSectionChange = (index: string) => {};

  useEffect(() => {
    console.log(currentSection);
  }, [currentSection]);

  const handleScroll = (e: React.UIEvent<HTMLInputElement>): void => {
    const sectionTops: { [key: string]: number } = {
      "report-1": (document.querySelector("#report-1") as HTMLDivElement)
        .offsetTop,
      "report-2": (document.querySelector("#report-2") as HTMLDivElement)
        .offsetTop,
      "report-3": (document.querySelector("#report-3") as HTMLDivElement)
        .offsetTop,
      "report-4": (document.querySelector("#report-4") as HTMLDivElement)
        .offsetTop,
      "report-5": (document.querySelector("#report-5") as HTMLDivElement)
        .offsetTop,
      "report-6": (document.querySelector("#report-6") as HTMLDivElement)
        .offsetTop,
      "report-7": (document.querySelector("#report-7") as HTMLDivElement)
        .offsetTop,
    };
    const scrollPosition = e.currentTarget.scrollTop;
    Object.entries(sectionTops).forEach(([section, top]) => {
      if (scrollPosition == top) {
        setCurrentSection(section);
      }
    });
  };
  return (
    <div
      onScroll={handleScroll}
      className="max-h-screen snap-y snap-mandatory overflow-y-scroll no-scrollbar"
    >
      <AnnualReportSection bgColor="bg-gray-900" id="report-1">
        <ReportWelcome handleSectionChange={handleSectionChange} />
      </AnnualReportSection>

      <AnnualReportSection bgColor="bg-red-500" id="report-2">
        {annualReport && currentSection == "report-2" && (
          <Overview
            watch_count={annualReport?.watch_count}
            title_count={annualReport?.title_count}
            top_10_watched={annualReport?.top_10_watched}
            handleSectionChange={handleSectionChange}
          />
        )}
      </AnnualReportSection>

      <AnnualReportSection bgColor="bg-blue-400" id="report-3">
        {annualReport && currentSection == "report-3" && (
          <TopTenVideos
            top_10_watched={annualReport.top_10_watched}
            handleSectionChange={handleSectionChange}
          />
        )}
      </AnnualReportSection>
      <AnnualReportSection bgColor="bg-green-500" id="report-4">
        {annualReport && currentSection == "report-4" && (
          <ChannelOverview
            channel_count={annualReport.channel_count}
            top_10_channel={annualReport.top_10_channel}
            handleSectionChange={handleSectionChange}
          />
        )}
      </AnnualReportSection>
      <AnnualReportSection bgColor="bg-yellow-400" id="report-5">
        {annualReport && currentSection == "report-5" && (
          <TopTenChannel
            top_10_channel={annualReport.top_10_channel}
            handleSectionChange={handleSectionChange}
          />
        )}
      </AnnualReportSection>
      <AnnualReportSection bgColor="bg-orange-500" id="report-6">
        {annualReport && currentSection == "report-6" && (
          <Month
            count_item_by_month={annualReport.count_item_by_month}
            handleSectionChange={handleSectionChange}
          />
        )}
      </AnnualReportSection>
      <AnnualReportSection bgColor="bg-red-500" id="report-7">
        {annualReport && currentSection == "report-7" && (
          <TimePeriod
            count_item_by_timeperiod={annualReport.count_items_by_timeperiod}
            count_item_by_hour={annualReport.count_item_by_hour}
            watch_count={annualReport.watch_count}
            handleSectionChange={handleSectionChange}
          />
        )}
      </AnnualReportSection>
    </div>
  );
};

export default AnnualReport;
