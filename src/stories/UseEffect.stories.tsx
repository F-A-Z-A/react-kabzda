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

export const SetIntervalExample = () => {
  const [fake, setFake] = useState(1);
  const [counter, setCounter] = useState(1);
  console.log("SetTimeoutExample - " + counter)
  
  useEffect(() => {
    const intervalID = setInterval(() => {
      setCounter((s) => s + 1)
    }, 1000)
    
    return (() => {
      clearInterval(intervalID)
    })
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

export const ResetEffectExample = () => {
  const [counter, setCounter] = useState(1);
  
  console.log("Component rendered")
  
  useEffect(() => {
    console.log("Effect occurred - " + counter)
    return () => {
      console.log("Reset effect - " + counter)
    }
  }, [counter]);
  
  const increase = () => setCounter(counter + 1)
  
  return <>
    <button onClick={increase}>+counter</button>
    {" - "}{counter}
  </>
}

export const KeysTrackerExample = () => {
  const [text, setText] = useState('');
  
  console.log("Component rendered with - " + text)
  
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      console.log(e.key)
      setText(text + e.key)
    }
    window.document.addEventListener("keypress", handler);
    return () => {
      window.document.removeEventListener("keypress", handler);
    }
  }, [text]);
  
  return <> Typed text: {text} </>
}

export const SetTimeoutExample = () => {
  const [text, setText] = useState('');
  
  console.log("Component rendered with - " + text)
  
  useEffect(() => {
    const timeoutID = setTimeout(() => {
      console.log('Timeout expired')
      setText('3 second passed')
    }, 3000)
    return () => {
      clearTimeout(timeoutID)
    }
  }, [text]);
  
  return <> Typed text: {text} </>
}