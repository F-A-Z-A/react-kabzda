import React from "react";
import { type ClockProps } from "./Clock";

const get2digitsString = (num: number) => (num < 10 ? "0" + num : "" + num);

export const DigitalClockView = ({ date }: ClockProps) => {
  return (
    <>
      <span>{get2digitsString(date.getHours())}</span>:<span>{get2digitsString(date.getMinutes())}</span>:
      <span>{get2digitsString(date.getSeconds())}</span>
    </>
  );
};
