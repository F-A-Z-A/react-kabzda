import React, { useEffect, useState } from "react";

export default {
  title: "useEffect demo",
};

export const SimpleExample = () => {
  // console.log("SimpleExample rendering");
  const [fake, setFake] = useState(1);
  const [counter, setCounter] = useState(1);

  // useEffect(() => {
  //   console.log("useEffect");
  //   document.title = `Counter - ${counter.toString()}`;
  // }, [counter]);

  useEffect(() => {
    console.log("useEffect every render");
  });

  useEffect(() => {
    console.log("useEffect only first render (componentDidMount)");
  }, []);

  useEffect(() => {
    console.log("useEffect first render, and counter changed");
  }, [counter]);

  return (
    <>
      <div>Count: {counter}</div>
      <button onClick={() => setCounter(counter + 1)}>+ count</button>
      <div>Fake: {fake}</div>
      <button onClick={() => setFake(fake + 1)}>+ fake</button>
    </>
  );
};

export const SetIntervalExample = () => {
  console.log("SetTimeoutExample rendering");

  const [hour, setHour] = useState<string>("00");
  const [minutes, setMinutes] = useState<string>("00");
  const [seconds, setSeconds] = useState<string>("00");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const hour = new Date().getHours().toString();
      const minutes = new Date().getMinutes().toString();
      const seconds = new Date().getSeconds().toString();

      setHour(hour.length < 2 ? "0" + hour : hour);
      setMinutes(minutes.length < 2 ? "0" + minutes : minutes);
      setSeconds(seconds.length < 2 ? "0" + seconds : seconds);
    }, 1000);
    console.log(intervalId);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      Time: {hour}:{minutes}:{seconds}
    </div>
  );
};

export const ResetEffectExample = () => {
  console.log(" Component rendering");

  const [counter, setCounter] = useState(1);

  useEffect(() => {
    console.log("Effect occurred", counter);

    return () => {
      console.log("RESET Effect", counter);
    };
  }, [counter]);

  return (
    <>
      <div>Count: {counter}</div>
      <button onClick={() => setCounter(counter + 1)}>+ count</button>
    </>
  );
};

export const KeysTrackerExample = () => {
  const [text, setText] = useState("");

  console.log(" Component rendering - ", text);

  useEffect(() => {
    const handler = (e: any) => {
      console.log(e.key);
      setText(text + e.key);
    };
    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [text]);

  return <>text: {text}</>;
};
