import axios from "axios";
import { useEffect, useState } from "react";

export type TitleCount = {
  title: string;
  count: number;
  title_url: string;
  title_id: string;
};

export type ChannelCount = {
  channelUrl: string;
  channel: string;
  count: number;
  channelId: string;
};

export type MonthCount = {
  month: number;
  count: number;
};

export type HourCount = {
  hour: number;
  count: number;
};

export type TimeCount = {
  time_period: number;
  count: number;
};

export type AnnualHistory = {
  watch_count: number;
  title_count: number;
  channel_count: number;
  top_10_watched: TitleCount[];
  top_10_channel: ChannelCount[];
  count_item_by_month: MonthCount[];
  count_item_by_hour: HourCount[];
  count_items_by_timeperiod: TimeCount[];
};

export const useUpload = (data: any) => {
  const [response, setResponse] = useState<AnnualHistory | null>(null);
  const [err, setErr] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (data != null) {
      setLoading(true);
      axios({
        method: "POST",
        headers: {
          "Content-Type": "api/upload",
        },
        url: "https://youtube-back-app-33cd6b26577b.herokuapp.com/api/upload",
        data: data,
      })
        .then((response) => {
          const res = response.data;
          setResponse(res.result);
          setErr(null);
        })
        .catch((error) => {
          if (error.response) {
            setResponse(null);
            setErr(error.response);
          }
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [data]);

  return { response, err, loading };
};
