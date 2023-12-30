import React from "react";

const scrollToNext = (id: string) => {
  const nextElement = document.getElementById(id);
  if (nextElement) nextElement.scrollIntoView({ behavior: "smooth" });
};

interface RBProps {
  toLink: string;
  color: string;
  text: string;
  handleSectionChange: (id: string) => void;
}
const ReportButton = ({
  toLink,
  color,
  text,
  handleSectionChange,
}: RBProps) => {
  return (
    <button
      className={`mt-5 rounded-xl border-2 bg-${color} px-5 py-0 text-lg font-medium text-white`}
      onClick={() => {
        scrollToNext(toLink);
        handleSectionChange(toLink);
      }}
    >
      {text} ▶
    </button>
  );
};

export default ReportButton;
