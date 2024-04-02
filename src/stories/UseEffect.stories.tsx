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
  
  const hours = new Date().getHours()
  const minutes = new Date().getMinutes()
  const seconds = new Date().getSeconds()
  
  const [second, setSecond] = useState(seconds);
  
  useEffect(() => {
    setInterval(() => {
      setSecond(s => s < 59 ? s + 1 : 0)
    }, 1000)
  }, []);
  
  
  return <>
    <span>{hours} : {minutes} : {second}</span>
  </>
}
