import { OnOff } from "./OnOff";
import { useState } from "react";
import { action } from "@storybook/addon-actions";

export default {
  title: "OnOff",
  component: OnOff,
};

const callback = action("clicked on or off");

export const OnMode = () => <OnOff on={true} onChange={callback} />;
export const OffMode = () => <OnOff on={false} onChange={callback} />;

export const ModeChanged = () => {
  const [value, setValue] = useState<boolean>(true);
  return <OnOff on={value} onChange={setValue} />;
};
