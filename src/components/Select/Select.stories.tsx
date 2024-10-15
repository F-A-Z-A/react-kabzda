import { Select } from "./Select";
import { action } from "@storybook/addon-actions";
import { useState } from "react";

export default {
  title: "Select",
  component: Select,
};

const users = [
  { title: "null", value: 0 },
  { title: "AAA", value: 1 },
  { title: "BBB", value: 2 },
  { title: "CCC", value: 3 },
  { title: "DDD", value: 4 },
];

const onChangeHandler = action("select changed");

export const ControlledSelect = () => {
  const [value, setValue] = useState(0);

  const onChange = (value: any) => {
    setValue(value);
    onChangeHandler();
  };

  return <Select value={value} onChange={onChange} items={users} />;
};
