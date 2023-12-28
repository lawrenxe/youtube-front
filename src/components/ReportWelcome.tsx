import React from "react";

const ReportWelcome = () => {
  const scrollToNext = (id: string) => {
    const nextElement = document.getElementById(id);
    if (nextElement) nextElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col items-center gap-y-10">
      <h1 className="text-5xl font-medium text-white">
        This is your Recap of 2023
      </h1>
      <button
        className="w-48 rounded-2xl border-2 bg-red-600 px-0 text-xl font-medium text-white"
        onClick={() => scrollToNext("report-2")}
      >
        Jump in ▶
      </button>
    </div>
  );
};

export default ReportWelcome;
