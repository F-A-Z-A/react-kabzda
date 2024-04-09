import React, {useEffect, useState} from 'react';

type PropsType = {}

export const ClockDigital: React.FC<PropsType> = (props) => {
  const [date, setDate] = useState(new Date());
  // console.log("ClockDigital");
  
  useEffect(() => {
    const intervalID = setInterval(() => {
      console.log("TICK");
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalID)
    }
  }, []);
  
  const getDubleNumber = (num: number) => num < 10 ? "0" + num : num;
  
  return (
    <div>
      <span>{getDubleNumber(date.getHours())}</span>
      :
      <span>{getDubleNumber(date.getMinutes())}</span>
      :
      <span>{getDubleNumber(date.getSeconds())}</span>
    </div>
  );
};