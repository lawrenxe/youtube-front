import React, { useEffect, useState } from "react";

import GuideSection from "./GuideSection";
import { AnnualHistory } from "../hooks/services";
import GuideWelcome from "./GuideWelcome";
import GuideStart from "./GuideStart";
import GuideStep1 from "./GuideStep1";
import GuideStep2 from "./GuideStep2";
import GuideStep3 from "./GuideStep3";
import GuideStep4 from "./GuideStep4";
import GuideStep5 from "./GuideStep5";
import GuideStep6 from "./GuideStep6";
import GuideStep7 from "./GuideStep7";
import GuideStep8 from "./GuideStep8";

interface GProps {
  setAnnualHistory: (annualHistory: AnnualHistory | null) => void;
}
const Guide = ({ setAnnualHistory }: GProps) => {
  const [currentSection, setCurrentSection] = useState<string>("guide-1");

  useEffect(() => {}, [currentSection]);

  const handleScroll = (e: React.UIEvent<HTMLInputElement>): void => {
    const sectionTops: { [key: string]: number } = {
      "guide-1": (document.querySelector("#guide-1") as HTMLDivElement)
        .offsetTop,
      "guide-2": (document.querySelector("#guide-2") as HTMLDivElement)
        .offsetTop,
      "guide-3": (document.querySelector("#guide-3") as HTMLDivElement)
        .offsetTop,
      "guide-4": (document.querySelector("#guide-4") as HTMLDivElement)
        .offsetTop,
      "guide-5": (document.querySelector("#guide-5") as HTMLDivElement)
        .offsetTop,
      "guide-6": (document.querySelector("#guide-6") as HTMLDivElement)
        .offsetTop,
      "guide-7": (document.querySelector("#guide-7") as HTMLDivElement)
        .offsetTop,
      "guide-8": (document.querySelector("#guide-8") as HTMLDivElement)
        .offsetTop,
      "guide-9": (document.querySelector("#guide-9") as HTMLDivElement)
        .offsetTop,

      "guide-10": (document.querySelector("#guide-10") as HTMLDivElement)
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
      className="flex h-screen w-screen snap-center justify-center"
    >
      <div className="absolute flex h-screen w-screen items-center justify-center bg-blue-500">
        <div className="guideBg bg-blue-500"></div>
      </div>

      <div
        className="relative flex snap-y snap-mandatory snap-center flex-col overflow-y-scroll no-scrollbar"
        onScroll={handleScroll}
      >
        <GuideSection id={"guide-1"}>
          {currentSection == "guide-1" && <GuideWelcome />}
        </GuideSection>

        <GuideSection id={"guide-2"}>
          {currentSection == "guide-2" && <GuideStart />}
        </GuideSection>

        <GuideSection id={"guide-3"}>
          {currentSection == "guide-3" && <GuideStep1 />}
        </GuideSection>

        <GuideSection id={"guide-4"}>
          {currentSection == "guide-4" && <GuideStep2 />}
        </GuideSection>

        <GuideSection id={"guide-5"}>
          {currentSection == "guide-5" && <GuideStep3 />}
        </GuideSection>

        <GuideSection id={"guide-6"}>
          {currentSection == "guide-6" && <GuideStep4 />}
        </GuideSection>

        <GuideSection id={"guide-7"}>
          {currentSection == "guide-7" && <GuideStep5 />}
        </GuideSection>

        <GuideSection id={"guide-8"}>
          {currentSection == "guide-8" && <GuideStep6 />}
        </GuideSection>

        <GuideSection id={"guide-9"}>
          {currentSection == "guide-9" && <GuideStep7 />}
        </GuideSection>

        <GuideSection id={"guide-10"}>
          {currentSection == "guide-10" && (
            <GuideStep8 setAnnualHistory={setAnnualHistory} />
          )}
        </GuideSection>
      </div>
    </div>
  );
};

export default Guide;
