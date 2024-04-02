import React, {useState} from "react";

export default {
  title: "UseState Demo"
}

function generateData() {
  console.log("generateData");
  return 1;
}

export const Example = () => {
  console.log("Example");
  // const initValue = useMemo(generateData, []);
  const [counter, setCounter] = useState(generateData);
  
  return <>
    <button onClick={() => setCounter((state: number) => state + 1)}>+</button>
    {counter}
  </>
}