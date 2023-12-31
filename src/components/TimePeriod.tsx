import { useEffect, useState } from "react";
import { HourCount, TimeCount } from "../hooks/services";
import Clock from "./Clock";
import ReportButton from "./ReportButton";
import Transition from "./Transition";

interface TPProps {
  count_item_by_timeperiod: TimeCount[];
  count_item_by_hour: HourCount[];
  watch_count: number;
  handleSectionChange: (id: string) => void;
}

const sortHour = (count_item_by_hour: HourCount[]) => {
  return [...count_item_by_hour].sort((a, b) => a.hour - b.hour);
};

export const TimePeriod = ({
  count_item_by_timeperiod,
  count_item_by_hour,
  watch_count,
  handleSectionChange,
}: TPProps) => {
  const [loaded, setLoaded] = useState(false);
  const handleLoad = () => {
    setLoaded(true);
  };

  useEffect(() => {
    handleLoad();
  }, []);
  return (
    <div className="flex flex-col items-start px-10">
      <div className="flex flex-col items-start gap-y-2">
        <Transition delay={0} time={3} loaded={loaded}>
          <h1 className="text-xl font-bold text-white">
            You are most active during
          </h1>
        </Transition>
        <Transition delay={2} time={3} loaded={loaded}>
          <h1 className="via-blue00 inline-block bg-gradient-to-r from-purple-300 to-yellow-400 bg-clip-text text-3xl font-bold text-transparent">
            {count_item_by_timeperiod[0].time_period}:00 -{" "}
            {count_item_by_timeperiod[0].time_period + 4 == 24
              ? 0
              : count_item_by_timeperiod[0].time_period + 4}
            :00
          </h1>
        </Transition>
        <Transition delay={4} time={3} loaded={loaded}>
          <div className="flex flex-row items-end">
            <h1 className="text-xl font-bold text-white">You watched&nbsp;</h1>
            <h1 className="text-2xl font-bold text-white">
              {(
                (count_item_by_timeperiod[0].count / watch_count) *
                100
              ).toFixed(2)}
              %&nbsp;
            </h1>
            <h1 className="text-xl font-bold text-white"> videos</h1>
          </div>
        </Transition>
        <Transition delay={5} time={3} loaded={loaded}>
          <h1 className="text-xl font-bold text-white">during that time.</h1>
        </Transition>

        <div className="flex w-full flex-col gap-y-2">
          <Transition delay={7} time={3} loaded={loaded}>
            <h2 className="mt-5 text-xl font-bold text-white">
              Let's take a look at it!
            </h2>
          </Transition>
          <Transition delay={8} time={3} loaded={loaded}>
            <div className="flex flex-row justify-center gap-x-10">
              <Clock
                data={sortHour(count_item_by_hour)}
                watch_count={watch_count}
              />
            </div>
          </Transition>
        </div>
      </div>

      <Transition delay={9} time={3} loaded={loaded}>
        <ReportButton
          text="replay"
          color="yellow-400"
          toLink="report-1"
          handleSectionChange={handleSectionChange}
        />
      </Transition>
    </div>
  );
};
