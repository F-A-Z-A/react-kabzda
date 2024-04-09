import {ClockDigital} from "./ClockDigital";
import React from "react";
import {ClockAnalog} from "./ClockAnalog";

export default {
  title: "Clock",
  component: ClockDigital
}

export const Digital = () => {
  return <ClockDigital/>
};

export const Analog = () => {
  return <ClockAnalog/>
};