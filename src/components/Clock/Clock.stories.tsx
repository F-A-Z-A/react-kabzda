import { Clock } from "./Clock"; // import AnalogClock from 'analog-clock-react';
// import AnalogClock from 'analog-clock-react';

export default {
  title: "Clock",
  component: "Clock",
};

export const BaseDigitalExample = () => {
  return <Clock mode={"digital"} />;
};

export const BaseAnalogExample = () => {
  return <Clock mode={"analog"} />;
  // return <AnalogClock />;
};
