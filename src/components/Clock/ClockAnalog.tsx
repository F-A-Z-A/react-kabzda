import React, {useEffect, useState} from 'react';
import styled from "styled-components";

type PropsType = {}

export const ClockAnalog: React.FC<PropsType> = () => {
  const [time, setTime] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("TICK");
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timer)
    }
  }, []);
  
  const hoursDegrees = ((time.getHours() % 12) * 30) + (time.getMinutes() * 0.5) + 90;
  const minutesDegrees = (time.getMinutes() * 6) + 90;
  const secondsDegrees = (time.getSeconds() * 6) + 90;
  
  return (
    <Clock>
      <Hours style={{transform: `rotate(${hoursDegrees}deg)`}}/>
      <Minutes style={{transform: `rotate(${minutesDegrees}deg)`}}/>
      <Seconds style={{transform: `rotate(${secondsDegrees}deg)`}}/>
    </Clock>
  );
};

const Clock = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  margin: auto;
  border: 10px solid #fff;
  border-radius: 50%;
  background-color: #333;

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    background-color: #fff;
    border-radius: 50%;
  }
`
const BaseHand = styled.div`
  position: absolute;
  top: 25%;
  left: 50%;
  //transform-origin: center;
  //transform: translate(-50%, -50%) rotate(0deg);
  background-color: #fff;
`
const Hours = styled(BaseHand)`
  height: 50%;
  width: 5px;
`
const Minutes = styled(BaseHand)`
  width: 3px;
  height: 50%;
`
const Seconds = styled(BaseHand)`
  width: 2px;
  height: 50%;
`


