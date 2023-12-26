import { AnnualHistory } from "../hooks/services";
import DragAndDrop from "./DragAndDrop";
import Welcome1 from "./Welcome1";
import Welcome2 from "./Welcome2";

interface WCProps {
  setAnnualHistory: (annualHistory: AnnualHistory) => void;
}

function WelcomeCarousel({ setAnnualHistory }: WCProps) {
  return (
    <div className=" carousel overflow-x-hidden rounded-none border-4 border-solid border-black shadow-solidShadow">
      <div id="item1" className="carousel-item w-full px-5 py-20">
        <Welcome1 />
      </div>
      <div id="item2" className="carousel-item w-full px-5 py-20">
        <Welcome2 />
      </div>
      <div
        id="item3"
        className="carousel-item flex w-full justify-center px-5 py-20"
      >
        <DragAndDrop setAnnualHistory={setAnnualHistory} />
      </div>
    </div>
  );
}

export default WelcomeCarousel;
