import React, { useEffect, useRef, useState } from "react";
import Transition from "./Transition";
import ReportButton from "./ReportButton";
import { AnnualHistory, useUpload } from "../hooks/services";
import { Link } from "react-router-dom";

interface GS7Props {
  setAnnualHistory: (annualHistory: AnnualHistory | null) => void;
}

const GuideStep7 = ({ setAnnualHistory }: GS7Props) => {
  const [loaded, setLoaded] = useState(false);
  const [isTypeErr, setTypeErr] = useState(false);
  const [isOtherErr, setOtherErr] = useState(false);
  const [isReady, setReady] = useState(false);
  const [file, setFile] = useState<any>(null);

  const [data, setData] = useState<any>(null);
  const { response, err, loading } = useUpload(data);

  useEffect(() => {
    if (response) {
      setReady(true);
      setAnnualHistory(response);
    }
    if (err) {
      setReady(false);
      setAnnualHistory(null);
    }
  }, [response, err]);

  const handleLoad = () => {
    setLoaded(true);
  };
  const hiddenFileInput = useRef<HTMLInputElement | null>(null);
  const handleClick = (e: React.MouseEvent) => {
    hiddenFileInput.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileUploaded = e?.target.files?.[0];

    if (fileUploaded) {
      setFile(fileUploaded);
      if (fileUploaded.type !== "application/json") {
        setTypeErr(true);
      } else {
        setTypeErr(false);
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const data = new FormData();
        data.append("file", fileUploaded);
        data.append("timezone", timezone);
        setData(data);
      }
    }
  };

  useEffect(() => {
    handleLoad();
  }, []);
  return (
    <div className="flex h-full w-full flex-col justify-center">
      <Transition delay={0} time={3} loaded={loaded}>
        <h1
          className={
            "inline-block bg-gradient-to-r from-yellow-300 via-yellow-500 to-red-400 bg-clip-text text-3xl font-bold text-transparent"
          }
        >
          Finally,
        </h1>
      </Transition>
      <Transition delay={1} time={3} loaded={loaded}>
        <h1 className={"text-xl font-bold text-transparent text-white"}>
          We are here, you made it.
        </h1>
      </Transition>

      <Transition delay={1} time={3} loaded={loaded}>
        <h2 className="mt-10 text-xl font-bold text-white">
          Now it's our turn, all you need to do is just to upload the file named
          "watch-history.json".
        </h2>
      </Transition>
      <Transition delay={2} time={3} loaded={loaded}>
        <h2 className="mt-5 text-xl font-bold text-white">
          Again, this is safe.
        </h2>
      </Transition>

      <Transition delay={4} time={3} loaded={loaded}>
        <>
          <input
            type="file"
            style={{ display: "none" }}
            onChange={handleChange}
            ref={hiddenFileInput}
          />

          <h1
            className={
              " mt-5 inline-block cursor-pointer bg-gradient-to-r from-yellow-300 via-yellow-500 to-red-400 bg-clip-text text-xl font-bold text-transparent underline"
            }
            onClick={handleClick}
          >
            {isReady ? `${file.name}  ◪` : "Select File ◪"}
          </h1>
          {file && loading && (
            <span className="loading loading-spinner loading-sm ml-5 bg-white"></span>
          )}

          {isTypeErr ||
            (err && (
              <h1 className="wrongFile text-md absolute text-sm font-medium text-yellow-500">
                Ooops, wrong file type. Try again.
              </h1>
            ))}
        </>
      </Transition>
      <div className="mt-10 flex w-full items-center justify-center">
        <Transition delay={0} time={3} loaded={isReady}>
          {isReady && (
            <Link
              className="hover: absolute mt-5 inline-block bg-gradient-to-r from-yellow-300 via-yellow-500 to-red-400 bg-clip-text text-3xl font-bold text-transparent hover:text-4xl"
              to="/2023"
            >
              ✈
            </Link>
          )}
        </Transition>
      </div>
    </div>
  );
};

export default GuideStep7;
