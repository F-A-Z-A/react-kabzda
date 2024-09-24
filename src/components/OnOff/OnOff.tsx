type OnOffType = {
  on: boolean;
  onClick: (value: boolean) => void;
};

export function OnOff(props: OnOffType) {
  console.log("OnOff rendering");

  return (
    <div style={{ display: "flex" }}>
      <button
        onClick={() => props.onClick(true)}
        style={{ cursor: "pointer", width: "50px", background: props.on ? "green" : "white", marginLeft: "10px" }}
      >
        <b>ON</b>
      </button>
      <button
        onClick={() => props.onClick(false)}
        style={{ cursor: "pointer", width: "50px", background: props.on ? "white" : "red", marginLeft: "10px" }}
      >
        <b>OFF</b>
      </button>
      <div
        style={{
          width: "30px",
          height: "30px",
          background: props.on ? "green" : "red",
          display: "inline-block",
          borderRadius: "50%",
          marginLeft: "10px",
        }}
      ></div>
    </div>
  );
}

const nameAgeMap: Record<string, number> = {
  Alice: 21,
  Bob: 25,
  Charlie: 30,
};

console.log(nameAgeMap.Alice); // 21
console.log(nameAgeMap.Bob); // 25
