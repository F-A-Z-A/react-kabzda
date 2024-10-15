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
  const [parentValue, setParentValue] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.value);
  };

  return (
    <>
      <input value={parentValue} onChange={onChange} />
    </>
  );
};

export const ControlledCheckbox = () => {
  const [parentValue, setParentValue] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.checked);
  };

  return (
    <>
      <input type={"checkbox"} checked={parentValue} onChange={onChange} />
    </>
  );
};

export const ControlledSelect = () => {
  const [parentValue, setParentValue] = useState<string | undefined>(undefined);

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setParentValue(e.currentTarget.value);
  };

  return (
    <>
      <select value={parentValue} onChange={onChange}>
        <option>none</option>
        <option value="1">Minsk</option>
        <option value="2">Moscow</option>
        <option value="3">Nadym</option>
      </select>
    </>
  );
};

export const ControlledInputWithFixedValue = () => {
  return <input value={"Hard Value"} />;
};
