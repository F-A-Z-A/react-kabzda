import {action} from "@storybook/addon-actions"
import {Accordion, AccordionRM} from "./Accordion";
import React, {useState} from "react";

export default {
  title: "Accordion",
  component: Accordion
}

const callback = action("clicked callback")
const onClickCallback = action("clicked onClickCallback")

export const MenuCollapsedMode = () => {
  return <Accordion
    collapsed={true}
    titleValue={"Menu"}
    onChange={callback}
    items={[]}
    onClick={onClickCallback}
  />
}
export const UsersUncollapsedMode = () => {
  return <Accordion
    collapsed={false}
    titleValue={"Users"}
    onChange={callback}
    items={[
      {value: 1, title: "Andrey"},
      {value: 2, title: "luda"},
      {value: 3, title: "Sergey"},
    ]}
    onClick={onClickCallback}
  />
}
export const ModeChanged = () => {
  const [value, setValue] = useState<boolean>(true)
  return <AccordionRM
    collapsed={value}
    titleValue={"Users"}
    onChange={() => setValue(!value)}
    items={[
      {title: "Andrey", value: 1},
      {title: "luda", value: 2},
      {title: "Sergey", value: 3},
    ]}
    // onClick={(value) => alert(`user width ID: ${value} should be happy`)}
    onClick={onClickCallback}
  />
}