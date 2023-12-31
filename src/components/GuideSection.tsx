import React, { ReactNode } from "react";

interface GSProps {
  children: ReactNode;
  id: string;
}

const GuideSection = ({ children, id }: GSProps) => {
  return (
    <section
      id={id}
      className="sticky flex h-screen w-screen snap-center justify-center"
    >
      <div
        id="container2"
        className="relative flex h-screen max-w-lg items-center justify-center px-10"
      >
        {children}
      </div>
    </section>
  );
};

export default GuideSection;
