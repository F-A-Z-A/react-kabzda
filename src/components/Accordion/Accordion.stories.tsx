import { Accordion } from "./Accordion";
import { useState } from "react";
import { action } from "@storybook/addon-actions";

export default {
  title: "Accordion",
  component: Accordion,
};

// const meta: Meta<typeof Accordion> = {
//   component: Accordion,
// };
// export default meta;
// type Story = StoryObj<typeof Accordion>;
// export const FirstStory: Story = {
//   args: {
//     title: "Hello",
//     collapsed: true,
//   },
// };

const onChangeHandler = action("accordion mode changed");

export const CollapsedAccordion = () => {
  return <Accordion title={"CollapsedAccordion"} collapsed={true} onChange={onChangeHandler} />;
};

export const OpenedAccordion = () => {
  return <Accordion title={"OpenedAccordion"} collapsed={false} onChange={onChangeHandler} />;
};

export const AccordionDemo = () => {
  const [value, setValue] = useState<boolean>(false);

  const callback = () => {
    setValue(!value);
    onChangeHandler();
  };

  return <Accordion title={"AccordionDemo"} collapsed={value} onChange={callback} />;
};
