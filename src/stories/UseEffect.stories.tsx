import React, {useEffect, useState} from "react";

export default {
  title: "UseEffect Demo"
}

export const SimpleExample = () => {
  const [fake, setFake] = useState(1);
  const [counter, setCounter] = useState(1);
  // console.log("SimpleExample")
  
  useEffect(() => {
    console.log("UseEffect every render");
    document.title = counter.toString();
  });
  
  useEffect(() => {
    console.log("UseEffect only first render");
    document.title = counter.toString();
  }, []);
  
  useEffect(() => {
    console.log("UseEffect first render and every changed counter");
    document.title = counter.toString();
  }, [counter]);
  
  return <>
    <div>
      <button onClick={() => setFake(fake + 1)}>fake</button>
      {fake}
    </div>
    <div>
      <button onClick={() => setCounter(counter + 1)}>counter</button>
      {counter}
    </div>
  </>
}

export const SetTimeoutExample = () => {
  const [fake, setFake] = useState(1);
  const [counter, setCounter] = useState(1);
  console.log("SetTimeoutExample - " + counter)
  
  useEffect(() => {
    setInterval(() => {
      setCounter((s) => s + 1)
    }, 1000)
  }, []);
  
  
  return <>
    <div>
      <button onClick={() => setFake(fake + 1)}>fake</button>
      {fake}
    </div>
    <div>
      <button onClick={() => setCounter(counter + 1)}>counter</button>
      {counter}
    </div>
  </>
}

export const ClockExample = () => {
  
  const [time, setTime] = useState({hour: 0, minute: 0, second: 0});
  
  useEffect(() => {
    setInterval(() => {
      const currentTime = new Date();
      setTime({
        hour: currentTime.getHours(),
        minute: currentTime.getMinutes(),
        second: currentTime.getSeconds(),
      })
    }, 1000)
  }, []);
  
  return <>
    <span>
      {time.hour < 10 ? `0${time.hour}` : time.hour} : {time.minute < 10 ? `0${time.minute}` : time.minute} : {time.second < 10 ? `0${time.second}` : time.second}
    </span>
  </>
}