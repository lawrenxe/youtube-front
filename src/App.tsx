import axios from "axios";
import "./App.css";
import WelcomeCarousel from "./components/WelcomeCarousel";

import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnnualHistory, HourCount, MonthCount } from "./hooks/services";
import { Line, LineChart, Tooltip, XAxis } from "recharts";
import AnnualReport from "./components/AnnualReport";
import Guide from "./components/Guide";

interface ARProps {
  annualHistory: AnnualHistory | null;
}

function AnnualReport1({ annualHistory }: ARProps) {
  useEffect(() => {}, [annualHistory]);
  return (
    <>
      <p>
        {" "}
        In 2023, You have watched {annualHistory?.title_count} videos with a
        total of {annualHistory?.watch_count} watches.
      </p>
      <p>
        {" "}
        The video you watched the most times was{" "}
        {annualHistory?.top_10_watched &&
          annualHistory?.top_10_watched[0].title}
        . You have watched it{" "}
        {annualHistory?.top_10_watched &&
          annualHistory?.top_10_watched[0].count}{" "}
        times.
        <img
          src={
            "https://img.youtube.com/vi/" +
            annualHistory?.top_10_watched[0].title_id +
            "/maxresdefault.jpg"
          }
        />
      </p>
      <p>Here comes to your top 10 most watched videos</p>
      {annualHistory?.top_10_watched?.map((title) => {
        return (
          <div key={title.title_id}>
            <div className={"flex	 flex-row justify-between py-2"}>
              <p className={"text-left"}>{title.title}</p>
              <p>{title.count} times</p>
            </div>
            <img
              src={"https://img.youtube.com/vi/" + title.title_id + "/1.jpg"}
            />
          </div>
        );
      })}
      <p>
        You have watched videos from {annualHistory?.channel_count} channels.
        You must like {annualHistory?.top_10_channel[0].channel} so much,
        because you played {annualHistory?.top_10_channel[0].count} times of
        their videos.
      </p>
      <p>Let's check out the top Channel of 2023 in your history</p>
      {annualHistory?.top_10_channel?.map((channel) => {
        return (
          <div
            key={channel.channelId}
            className={"flex	 flex-row justify-between py-2"}
          >
            <p className={"text-left"}>{channel.channel}</p>
            <p>{channel.count} times</p>
          </div>
        );
      })}
      <p>
        {annualHistory?.count_item_by_month[0].month &&
          Intl.DateTimeFormat("en", { month: "long" }).format(
            new Date(annualHistory?.count_item_by_month[0].month.toString()),
          )}{" "}
        must be a special month for you. You have watched{" "}
        {annualHistory?.count_item_by_month[0].count} videos in this month.
      </p>
      {annualHistory?.count_item_by_month && (
        <LineChart
          width={730}
          height={250}
          data={getMonthCounts(annualHistory?.count_item_by_month)}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="month" />
          <Line type="monotone" dataKey="count" stroke="#8884d8" />
          <Tooltip />
        </LineChart>
      )}
      {annualHistory?.count_items_by_timeperiod[0].time_period && (
        <p>
          You are most active at{" "}
          {annualHistory?.count_items_by_timeperiod[0].time_period}:00 -{" "}
          {annualHistory?.count_items_by_timeperiod[0].time_period + 4}:00. You
          watched {annualHistory?.count_item_by_hour[0].count} videos during the
          time_period {annualHistory.count_item_by_hour[0].hour}:00 -{" "}
          {annualHistory.count_item_by_hour[0].hour + 1}:00, that means, you
          watched {annualHistory.count_item_by_hour[0].count / 365} every day on
          average during this hour.
        </p>
      )}
      {annualHistory?.count_item_by_hour && (
        <LineChart
          width={730}
          height={250}
          data={getHourCounts(annualHistory?.count_item_by_hour)}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="hour" />
          <Line type="monotone" dataKey="count" stroke="#8884d8" />
          <Tooltip />
        </LineChart>
      )}
    </>
  );
}

const getMonthCounts = (monthCount: MonthCount[]): MonthCount[] => {
  const sortedMonthCount = [...monthCount];
  sortedMonthCount.sort((a, b) => a.month - b.month);
  return sortedMonthCount;
};

const getHourCounts = (hourCount: HourCount[]): HourCount[] => {
  const sortedHourCount = [...hourCount];
  sortedHourCount.sort((a, b) => a.hour - b.hour);
  return sortedHourCount;
};

function App() {
  const [annualHistory, setAnnualHistory] = useState<AnnualHistory | null>();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Guide setAnnualHistory={setAnnualHistory} />}
        />
        <Route
          path="2023"
          element={
            <AnnualReport annualReport={annualHistory ? annualHistory : null} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
