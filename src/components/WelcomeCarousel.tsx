import Welcome1 from "./Welcome1";
import Welcome2 from "./Welcome2";

function WelcomeCarousel() {
  return (
    <div className=" shadow-solidShadow carousel rounded-none border-4 border-solid border-black">
      <div id="item1" className="carousel-item w-full px-5 py-20">
        <Welcome1 />
      </div>
      <div id="item2" className="carousel-item w-full px-5 py-20">
        <Welcome2 />
      </div>
      <div id="item3" className="carousel-item w-full px-5 py-20">
        Welcome
      </div>
    </div>
  );
}

export default WelcomeCarousel;
