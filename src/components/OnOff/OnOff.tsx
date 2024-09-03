import { useState } from "react";

type Props = {};
export const OnOff = (props: Props) => {
  const [color, setColor] = useState<string>("");
  const onClickHandler = (color: string) => {
    setColor(color);
  };

  return (
    <div style={{ display: "flex" }}>
      <button onClick={() => onClickHandler("green")} style={{ background: color === "green" ? "green" : undefined }}>
        ON
      </button>
      <button onClick={() => onClickHandler("red")} style={{ background: color === "red" ? "red" : undefined }}>
        OFF
      </button>
      <div
        style={{
          width: "20px",
          height: "20px",
          background: color,
          display: "inline-block",
          borderRadius: "50%",
          marginLeft: "10px",
        }}
      ></div>
    </div>
  );
};
