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

const users = [
  { title: "AAA", value: "111" },
  { title: "BBB", value: "222" },
  { title: "CCC", value: "333" },
  { title: "DDD", value: "444" },
];

const onChangeHandler = action("accordion mode changed");

const onClickCallback = action("some item was clicked");

export const CollapsedAccordion = () => {
  return (
    <Accordion
      title={"CollapsedAccordion"}
      collapsed={true}
      onChange={onChangeHandler}
      items={[]}
      onClick={onClickCallback}
    />
  );
};

export const OpenedAccordion = () => {
  return (
    <Accordion
      title={"OpenedAccordion"}
      collapsed={false}
      onChange={onChangeHandler}
      items={users}
      onClick={onClickCallback}
    />
  );
};

export const AccordionDemo = () => {
  const [value, setValue] = useState<boolean>(false);

  const callback = () => {
    setValue(!value);
    onChangeHandler();
  };

  return (
    <Accordion
      title={"AccordionDemo"}
      collapsed={value}
      onChange={callback}
      items={users}
      onClick={(value) => console.log(value)}
    />
  );
};
