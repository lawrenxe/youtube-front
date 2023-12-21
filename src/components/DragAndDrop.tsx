import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

function DragAndDrop() {
  const [dragActive, setDragActive] = useState<boolean>(false);
  const inputRef = useRef<any>(null);
  const [files, setFiles] = useState<any>([]);

  const handleDrop = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const data = new FormData();
      data.append("file", e.dataTransfer.files[0]);

      axios({
        method: "POST",
        url: "http://127.0.0.1:5000/api/upload",
        data: data,
      })
        .then((response) => {
          const res = response.data;
          console.log(res);
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response);
            console.log(error.response.status);
            console.log(error.response.headers);
          }
        });
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

  const handleSubmitFile = (e: any) => {
    const data = new FormData();
    data.append("file", e.uploadInput.files[0]);
  };
  const openFileExplorer = () => {
    inputRef.current.value = "";
    inputRef.current.click();
  };
  const removeFile = (fileName: String, idx: any) => {
    const newArr = [...files];
    newArr.splice(idx, 1);
    setFiles([]);
    setFiles(newArr);
  };

  useEffect(() => {
    console.log("state Changed");
  }, [dragActive]);

  return (
    <form
      className={`${dragActive ? "bg-green-500" : "bg-white"} ${
        dragActive ? "cursor-pointer" : ""
      } shadow-innerSolidShadow flex h-40 w-40  flex-col items-center justify-center rounded-full border-4 border-black p-4 text-center`}
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

      {/* <div className="flex flex-col items-center p-3">
        {files.map((file: any, idx: any) => (
          <div key={idx} className="flex flex-row space-x-5">
            <span>{file.name}</span>
            <span
              className="cursor-pointer text-red-500"
              onClick={() => removeFile(file.name, idx)}
            >
              remove
            </span>
          </div>
        ))}
      </div> */}
    </form>
  );
}

export default DragAndDrop;
