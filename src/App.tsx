import axios from "axios";
import "./App.css";
import WelcomeCarousel from "./components/WelcomeCarousel";

import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnnualHistory, MonthCount } from "./hooks/services";

interface ARProps {
  annualHistory: AnnualHistory | null;
}

function AnnualReport({ annualHistory }: ARProps) {
  useEffect(() => {
    console.log(annualHistory);
  }, [annualHistory]);
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
      </p>
      <p>Here comes to your top 10 most watched videos</p>
      {annualHistory?.top_10_watched?.map((title) => {
        return (
          <div className={"flex	 flex-row justify-between py-2"}>
            <p className={"text-left"}>{title.title}</p>
            <p>{title.count} times</p>
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
          <div className={"flex	 flex-row justify-between py-2"}>
            <p className={"text-left"}>{channel.channel}</p>
            <p>{channel.count} times</p>
          </div>
        );
      })}
      <p>
        {annualHistory?.count_item_by_month[0].month &&
          Intl.DateTimeFormat("en", { month: "long" }).format(
            new Date(annualHistory?.count_item_by_month[0].month),
          )}{" "}
        must be a special month for you. You have watched{" "}
        {annualHistory?.count_item_by_month[0].count} videos in this month.
      </p>
      {/* {annualHistory?.count_item_by_month && (
        <LineChart
          xAxis={[
            {
              data: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ],
            },
          ]}
          series={[
            { data: getMonthCounts(annualHistory?.count_item_by_month) },
          ]}
        />
      )} */}
    </>
  );
}

const getMonthCounts = (monthCount: MonthCount[]): number[] => {
  monthCount.sort((a, b) => a.month - b.month);
  return monthCount.map((mc) => mc.count);
};

function App() {
  const [annualHistory, setAnnualHistory] = useState<AnnualHistory | null>();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<WelcomeCarousel setAnnualHistory={setAnnualHistory} />}
        />
        <Route
          path="2023"
          element={
            <AnnualReport
              annualHistory={annualHistory ? annualHistory : null}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
