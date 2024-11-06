import React, { useState } from "react";

export default {
  title: "useState demo",
};

function generateData() {
  console.log("generateData rendering");
  return 111;
}

export const Example1 = () => {
  console.log("Example1 rendering");
  // const initValue = useMemo(generateData, []);
  const [counter, setCounter] = useState(generateData);

  // const changer = (value: number) => {
  //   return value + 1;
  // };

  return (
    <>
      <button onClick={() => setCounter((value) => value + 1)}>+ count</button>
      <div>{counter}</div>
    </>
  );
};
