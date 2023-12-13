import Button from "./Button";

function Welcome1() {
  return (
    <div id="try" className="flex h-full w-full flex-col items-start gap-y-5">
      <h1 className="">Welcome</h1>
      <h2 className="">
        Are you ready to reveal your personalised YouTube review of 2023?
      </h2>
      <Button text={"Count Me In!"} link={"#item2"} />
    </div>
  );
}

export default Welcome1;
