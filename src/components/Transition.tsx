import { ReactNode } from "react";

interface TProps {
  time: number;
  delay: number;
  loaded: boolean;
  children: ReactNode;
  className?: string;
}

const Transition = ({ time, delay, children, loaded, className }: TProps) => {
  return (
    <div
      className={`${loaded ? "opacity-100" : "opacity-0"} ${className}`}
      style={{ transitionDelay: `${delay}s`, transitionDuration: `${time}s` }}
    >
      {children}
    </div>
  );
};

export default Transition;
