import { useState } from "react";

type UncontrolledOnOffType = {
  defaultOn?: boolean;
};

export function UncontrolledOnOff(props: UncontrolledOnOffType) {
  console.log("UncontrolledOnOff rendering");
  const [on, setOn] = useState<boolean>(props.defaultOn ? props.defaultOn : false);

  return (
    <div style={{ display: "flex" }}>
      <button
        onClick={() => setOn(true)}
        style={{ cursor: "pointer", width: "50px", background: on ? "green" : "white", marginLeft: "10px" }}
      >
        <b>ON</b>
      </button>
      <button
        onClick={() => setOn(false)}
        style={{ cursor: "pointer", width: "50px", background: on ? "white" : "red", marginLeft: "10px" }}
      >
        <b>OFF</b>
      </button>
      <div
        style={{
          width: "30px",
          height: "30px",
          background: on ? "green" : "red",
          display: "inline-block",
          borderRadius: "50%",
          marginLeft: "10px",
        }}
      ></div>
    </div>
  );
}
