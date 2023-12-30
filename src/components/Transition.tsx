import React, { ReactNode } from "react";

interface TProps {
  time: number;
  delay: number;
  loaded: boolean;
  children: ReactNode;
}

const Transition = ({ time, delay, children, loaded }: TProps) => {
  return (
    <div
      className={`${
        loaded ? "opacity-100" : "opacity-0"
      }  duration-[${time}s] delay-${delay}`}
    >
      {children}
    </div>
  );
};

export default Transition;
