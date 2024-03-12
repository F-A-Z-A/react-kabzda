import {action} from "@storybook/addon-actions"
import React from "react";
import {UncontrolledAccordion} from "./UncontrolledAccordion";

export default {
  title: "UncontrolledAccordion",
  component: UncontrolledAccordion
}

const callback = action("clicked")

export const ModeChanged = () => {
  return <UncontrolledAccordion titleValue={"Users"}/>
}