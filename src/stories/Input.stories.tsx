import { ChangeEvent, useRef, useState } from "react";

export default {
  title: "UncontrolledInput",
};

export const UncontrolledInput = () => {
  return <input />;
};

export const TrackValueOfUncontrolledInput = () => {
  const [value, setValue] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  return (
    <>
      <input onChange={onChange} />
      {" - "}
      {value}
    </>
  );
};

export const GetValueOfUncontrolledInputByButtonPress = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const save = () => {
    const el = inputRef.current as HTMLInputElement;
    setValue(el.value);
  };

  return (
    <>
      <input ref={inputRef} />
      <button onClick={save}>save</button>
      {" - "}
      {value}
    </>
  );
};

export const ControlledInput = () => {
  return <input value={"Hard Value"} />;
};
