import Button from "./Button";

function Welcome2() {
  return (
    <div className="flex h-full w-full flex-col items-start gap-y-4">
      <h1 className="text-left">Before We Get Started</h1>
      <h2 className="text-left">We need a favor from you.</h2>

      <div className="carousel w-full">
        <div
          id="item21"
          className="carousel-item flex w-full flex-col items-start gap-y-4"
        >
          <h2 className="font-medium">Step 1:</h2>
          <h2>
            Head to{" "}
            <a href="https://takeout.google.com" target="_blank">
              Google Takeout
            </a>{" "}
            and Log in with your Google Account.
          </h2>
          <Button link={"#item22"} text={"Next"} />
        </div>

        <div
          id="item22"
          className="flex-start carousel-item flex w-full flex-col items-start gap-y-4"
        >
          <h2 className="font-medium">Step 2:</h2>
          <h2>
            Choose <span className="font-medium">Deselect All</span>, scroll
            down to the bottom, and select{" "}
            <span className="font-medium">YouTube and Youtube Music</span>.
          </h2>
          <div className="flex flex-row gap-x-2">
            <Button link={"#item21"} text={"Previous"} />
            <Button link={"#item23"} text={"Next"} />
          </div>
        </div>
        <div
          id="item23"
          className="flex-start carousel-item flex w-full flex-col items-start gap-y-4"
        >
          <h2 className="font-medium">Step 3:</h2>
          <h2>
            Click <span className="font-medium">Multiple formats</span> and
            change the format of <span className="font-medium">history</span>{" "}
            from <span className="font-medium">HTML</span> to{" "}
            <span className="font-medium">JSON</span> and hit{" "}
            <span className="font-medium">OK</span>.
          </h2>
          <div className="flex flex-row gap-x-2">
            <Button link={"#item22"} text={"Previous"} />
            <Button link={"#item24"} text={"Next"} />
          </div>
        </div>
        <div
          id="item24"
          className="flex-start carousel-item flex w-full flex-col items-start gap-y-4"
        >
          <h2 className="font-medium">Step 4:</h2>
          <h2>
            Click <span className="font-medium">Next Step</span> and You are
            ready to go!
          </h2>
          <h2 className="text-left">
            It might take up to 1 day for you to get the raw data from Google.
            That is all we need to get your analytics. We are waiting for you to
            come back.
          </h2>
          <h2>I know you are frowning, but this is the only way :-(</h2>
          <div className="flex flex-row gap-x-2">
            <Button link={"#item23"} text={"Previous"} />
            <Button
              link={"#item3"}
              text={"I have gotten my Data from Google"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome2;
