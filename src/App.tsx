import axios from "axios";
import "./App.css";
import WelcomeCarousel from "./components/WelcomeCarousel";

import { useState } from "react";

function App() {
  const [data, setData] = useState<String | null>(null);
  function getData() {
    axios({
      method: "GET",
      url: "http://127.0.0.1:5000/api",
    })
      .then((response) => {
        const res = response.data;
        setData(res);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  }
  return (
    <>
      <WelcomeCarousel />

      <button onClick={getData}>1</button>
      {data}
    </>
  );
}

export default App;
