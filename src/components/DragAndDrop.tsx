import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { AnnualHistory, useUpload } from "../hooks/services";
import AnnualReport from "./AnnualReport";
import { Link } from "react-router-dom";

interface DADProps {
  setAnnualHistory: (annualHistory: AnnualHistory) => void;
}

function DragAndDrop({ setAnnualHistory }: DADProps) {
  const [dragActive, setDragActive] = useState<boolean>(false);
  const inputRef = useRef<any>(null);
  const [files, setFiles] = useState<any>([]);

  const [isReady, setIsReady] = useState<boolean>(false);
  const [data, setData] = useState<any>();
  const { response, err, loading } = useUpload(data);

  useEffect(() => {
    if (response) {
      console.log(response);
      setIsReady(true);
      setAnnualHistory(response);
    }
    if (err) {
      console.log(err);
    }
  }, [response, err]);

  const handleDrop = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const data = new FormData();
      data.append("file", e.dataTransfer.files[0]);
      data.append("timezone", timezone);
      setData(data);
    }
  };
  const handleDragEnter = (e: any) => {
    console.log("dragEnter");
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e: any) => {
    console.log("dragLeave");
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const handleDragOver = (e: any) => {
    console.log("dragOver");
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleChange = (e: any) => {
    console.log("File has been added");
    e.preventDefault();
    console.log("File has been added");
    if (e.target.files && e.target.files[0]) {
      for (let i = 0; i < e.target.files["length"]; i++) {
        setFiles((prevState: any) => [...prevState, e.target.files[i]]);
      }
    }
  };

  // const handleSubmitFile = (e: any) => {
  //   const data = new FormData();
  //   data.append("file", e.uploadInput.files[0]);
  // };
  // const openFileExplorer = () => {
  //   inputRef.current.value = "";
  //   inputRef.current.click();
  // };
  // const removeFile = (fileName: String, idx: any) => {
  //   const newArr = [...files];
  //   newArr.splice(idx, 1);
  //   setFiles([]);
  //   setFiles(newArr);
  // };

  useEffect(() => {
    console.log("state Changed");
  }, [dragActive]);

  return (
    <>
      <form
        className={`${dragActive ? "bg-green-500" : "bg-white"} ${
          dragActive ? "cursor-pointer" : ""
        } flex h-40 w-40 flex-col  items-center justify-center rounded-full border-4 border-black p-4 text-center shadow-innerSolidShadow`}
        onDragEnter={handleDragEnter}
        onSubmit={(e) => e.preventDefault()}
        onDrop={handleDrop}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
      >
        <input
          placeholder="fileInput"
          className="hidden"
          ref={inputRef}
          type="file"
          multiple={false}
          onChange={handleChange}
          accept=".json"
        />
      </form>
      {isReady && <Link to="/2023">2023</Link>}
    </>
  );
}

export default DragAndDrop;
