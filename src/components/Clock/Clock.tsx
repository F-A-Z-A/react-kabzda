import React, { useEffect, useState } from "react";
import { DigitalClockView } from "./DigitalClockView";
import { AnalogClockView } from "./AnalogClockView";

export const Clock = (props: Props) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("TICK");
      setDate(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  let view;
  switch (props.mode) {
    case "digital":
      view = <DigitalClockView date={date} />;
      break;
    case "analog":
      view = <AnalogClockView date={date} />;
      break;
    default:
      console.log("view mode not found");
  }

  return <>{view}</>;
};

// types
type Props = {
  mode: "digital" | "analog";
};

export type ClockProps = {
  date: Date;
};
