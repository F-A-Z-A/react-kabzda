import { Accordion } from "./Accordion";
import { useState } from "react";
import { action } from "@storybook/addon-actions";

export default {
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

const onChangeHandler = action("onChange");

export const CollapsedAccordion = () => {
  return <Accordion title={"CollapsedAccordion"} collapsed={true} onChange={onChangeHandler} />;
};

export const OpenedAccordion = () => {
  return <Accordion title={"OpenedAccordion"} collapsed={false} onChange={() => {}} />;
};

export const AccordionDemo = () => {
  const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
  return (
    <Accordion
      title={"AccordionDemo"}
      collapsed={accordionCollapsed}
      onChange={() => setAccordionCollapsed(!accordionCollapsed)}
    />
  );
};
