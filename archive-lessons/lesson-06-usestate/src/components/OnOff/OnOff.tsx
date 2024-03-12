import React, {useState} from 'react';

export type OnOffPropsType = {
  // on: boolean
}

export const OnOff = (props: OnOffPropsType) => {
  
  console.log("UncontrolledOnOff rendering")
  
  const [on, setOn] = useState(false)
  console.log("on: " + on)
  
  const onStyle = {
    width: "30px",
    height: "20px",
    border: "1px solid black",
    display: "inline-block",
    padding: "2px",
    backgroundColor: on ? "#83c575" : "#fff",
    // cursor: "pointer",
  };
  const offStyle = {
    width: "30px",
    height: "20px",
    border: "1px solid black",
    display: "inline-block",
    marginLeft: "2px",
    padding: "2px",
    backgroundColor: on ? "#fff" : "#d05162",
    // cursor: "pointer",
  };
  const indicatorStyle = {
    width: "10px",
    height: "10px",
    borderRadius: "5px",
    border: "1px solid black",
    display: "inline-block",
    marginLeft: "5px",
    backgroundColor: on ? "#83c575" : "#d05162"
  };
  
  return (
    <div>
      <div style={onStyle} onClick={() => {
        setOn(true)
      }}>
        On
      </div>
      <div style={offStyle} onClick={() => {
        setOn(false)
      }}>
        Off
      </div>
      <div style={indicatorStyle}></div>
    </div>
  )
};
