import React from "react";
import {ClockViewPropsType} from "./Clock";

export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {
  const getDubleNumber = (num: number) => num < 10 ? "0" + num : num;
  return <>
    <span>{getDubleNumber(date.getHours())}</span>
    {' : '}
    <span>{getDubleNumber(date.getMinutes())}</span>
    {' : '}
    <span>{getDubleNumber(date.getSeconds())}</span>
  </>
}