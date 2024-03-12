import {action} from "@storybook/addon-actions"
import {Accordion} from "./Accordion";
import React, {useState} from "react";

export default {
  title: "Accordion",
  component: Accordion
}

const callback = action("clicked")

export const MenuCollapsedMode = () => <Accordion collapsed={true} titleValue={"Menu"} onChange={callback}/>
export const UsersUncollapsedMode = () => <Accordion collapsed={false} titleValue={"Users"} onChange={callback}/>


export const ModeChanged = () => {
  const [value, setValue] = useState<boolean>(true)
  return <Accordion collapsed={value} titleValue={"Users"} onChange={() => setValue(!value)}/>
}