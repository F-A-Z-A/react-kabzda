import React from 'react';

export type OnOffPropsType = {
  on: boolean
  onChange: (on: boolean) => void
}

export const OnOff = (props: OnOffPropsType) => {
  console.log("UncontrolledOnOff rendering")
  console.log("on: " + props.on)
  
  const onStyle = {
    width: "30px",
    height: "20px",
    border: "1px solid black",
    display: "inline-block",
    padding: "2px",
    backgroundColor: props.on ? "#83c575" : "#fff",
    // cursor: "pointer",
  };
  const offStyle = {
    width: "30px",
    height: "20px",
    border: "1px solid black",
    display: "inline-block",
    marginLeft: "2px",
    padding: "2px",
    backgroundColor: props.on ? "#fff" : "#d05162",
    // cursor: "pointer",
  };
  const indicatorStyle = {
    width: "10px",
    height: "10px",
    borderRadius: "5px",
    border: "1px solid black",
    display: "inline-block",
    marginLeft: "5px",
    backgroundColor: props.on ? "#83c575" : "#d05162"
  };
  
  return (
    <div>
      <div style={onStyle} onClick={() => props.onChange(true)}>On</div>
      <div style={offStyle} onClick={() => props.onChange(false)}>Off</div>
      <div style={indicatorStyle}></div>
    </div>
  )
};
