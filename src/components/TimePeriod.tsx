import { HourCount, TimeCount } from "../hooks/services";
import Clock from "./Clock";
import ReportButton from "./ReportButton";

interface TPProps {
  count_item_by_timeperiod: TimeCount[];
  count_item_by_hour: HourCount[];
  watch_count: number;
  handleSectionChange: (id: string) => void;
}

const sortHour = (count_item_by_hour: HourCount[]) => {
  console.log([...count_item_by_hour].sort((a, b) => a.hour - b.hour));

  return [...count_item_by_hour].sort((a, b) => a.hour - b.hour);
};

export const TimePeriod = ({
  count_item_by_timeperiod,
  count_item_by_hour,
  watch_count,
  handleSectionChange,
}: TPProps) => {
  const userType: string[] = [
    "You must be a night owl, aren't you? Burning the midnight oil?",
    "Hard to say if you're an early bird or a night owl.",
    "You are indeed a morning person, aren't you?",
    "An exciting YouTube video paired with a cup of afternoon tea fits you best, doesn't it?",
    "You're in the evening groove, balancing work and leisure.",
    "A mindful YouTube video must be part of you pre-sleep routine.",
  ];
  return (
    <div className="flex flex-col items-start px-10">
      <div className="flex flex-col items-start gap-y-2">
        {/* <h1 className="text-sm font-medium text-white">
          {userType[count_item_by_timeperiod[0].time_period / 4]}
        </h1> */}
        <h1 className="text-xl font-medium text-white">
          You are most active during
        </h1>
        <h1 className="inline-block bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-bold text-transparent text-white">
          {count_item_by_timeperiod[0].time_period}:00 -{" "}
          {count_item_by_timeperiod[0].time_period + 4 == 24
            ? 0
            : count_item_by_timeperiod[0].time_period + 4}
          :00
        </h1>
        <div className="flex flex-row items-end">
          <h1 className="text-xl font-medium text-white">You watched&nbsp;</h1>
          <h1 className="text-2xl font-bold text-white">
            {((count_item_by_timeperiod[0].count / watch_count) * 100).toFixed(
              2,
            )}
            %&nbsp;
          </h1>
          <h1 className="text-xl font-medium text-white">of videos</h1>
        </div>
        <h1 className="text-xl font-medium text-white">during that time.</h1>
        <div className="flex w-full flex-col gap-y-2">
          <h2 className="text-xl font-medium text-white">
            Let's take a look at it!
          </h2>
          <div className="flex flex-row justify-center gap-x-10">
            <Clock
              data={sortHour(count_item_by_hour)}
              watch_count={watch_count}
            />
          </div>
        </div>
      </div>

      <ReportButton
        text="replay"
        color="red-500"
        toLink="report-1"
        handleSectionChange={handleSectionChange}
      />
    </div>
  );
};
