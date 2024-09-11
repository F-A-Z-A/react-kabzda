import { useState } from "react";

export function OnOff() {
  console.log("OnOff rendering");
  const [on, setOn] = useState(false);

  return (
    <div style={{ display: "flex" }}>
      <button
        onClick={() => setOn(true)}
        style={{ width: "50px", background: on ? "green" : "white", marginLeft: "10px" }}
      >
        <b>ON</b>
      </button>
      <button
        onClick={() => setOn(false)}
        style={{ width: "50px", background: on ? "white" : "red", marginLeft: "10px" }}
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
