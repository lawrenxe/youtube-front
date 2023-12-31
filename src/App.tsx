import "./App.css";

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnnualHistory } from "./hooks/services";

import AnnualReport from "./components/AnnualReport";
import Guide from "./components/Guide";

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
