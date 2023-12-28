import React from "react";

const addCommas = (number: number): string => {
  let numberString = number.toString();
  let result = "";
  let position = 0;
  for (let i = numberString.length - 1; i >= 0; i--) {
    if (position % 3 === 0 && position > 0) result = "," + result;
  }

  return result;
};

export default addCommas;
