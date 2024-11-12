import React, { useEffect, useState } from "react";

export default {
  title: "useEffect demo",
};

export const SimpleExample = () => {
  // console.log("SimpleExample rendering");
  const [fake, setFake] = useState(1);
  const [counter, setCounter] = useState(1);

  // useEffect(() => {
  //   console.log("useEffect");
  //   document.title = `Counter - ${counter.toString()}`;
  // }, [counter]);

  useEffect(() => {
    console.log("useEffect every render");
  });

  useEffect(() => {
    console.log("useEffect only first render (componentDidMount)");
  }, []);

  useEffect(() => {
    console.log("useEffect first render, and counter changed");
  }, [counter]);

  return (
    <>
      <div>Count: {counter}</div>
      <button onClick={() => setCounter(counter + 1)}>+ count</button>
      <div>Fake: {fake}</div>
      <button onClick={() => setFake(fake + 1)}>+ fake</button>
    </>
  );
};
