import React from "react";

const scrollToNext = (id: string) => {
  const nextElement = document.getElementById(id);
  if (nextElement) nextElement.scrollIntoView({ behavior: "smooth" });
};

interface RBProps {
  toLink: string;
  color: string;
  text: string;
}
const ReportButton = ({ toLink, color, text }: RBProps) => {
  return (
    <button
      className={`mt-5 rounded-md border-2 bg-${color} px-5 py-0 text-lg font-bold text-white`}
      onClick={() => {
        scrollToNext(toLink);
      }}
    >
      {text} ▶
    </button>
  );
};

export default ReportButton;
