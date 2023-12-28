import React, { ReactNode } from "react";

interface ARSProps {
  children: ReactNode;
  bgColor: string;
  id: string;
}

const AnnualReportSection = ({ children, bgColor, id }: ARSProps) => {
  return (
    <section id={id} className="sticky h-screen w-screen flex-1 snap-center">
      <div
        id="container1"
        className={`absolute flex h-screen w-screen items-center justify-center ${bgColor}`}
      >
        <div className="gradient"></div>
      </div>
      <div
        id="container2"
        className="relative flex h-screen  items-center justify-center"
      >
        {children}
      </div>
    </section>
  );
};

export default AnnualReportSection;
