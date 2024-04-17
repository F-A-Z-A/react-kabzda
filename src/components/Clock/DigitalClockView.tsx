import React from "react";
import {ClockViewPropsType} from "./Clock";

export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {
  const getDoubleNumber = (num: number) => num < 10 ? "0" + num : num;
  return <>
    <span>{getDoubleNumber(date.getHours())}</span>
    {' : '}
    <span>{getDoubleNumber(date.getMinutes())}</span>
    {' : '}
    <span>{getDoubleNumber(date.getSeconds())}</span>
  </>
}