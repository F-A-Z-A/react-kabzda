import React from "react";
import {action} from "@storybook/addon-actions";
import {UncontrolledOnOff} from "./UncontrolledOnOff";

export default {
  title: "UncontrolledOnOff",
  component: UncontrolledOnOff
}

const callback = action("clicked")

export const OnMode = () => <UncontrolledOnOff onChange={callback} defaultOn={true}/>
export const OffMode = () => <UncontrolledOnOff onChange={callback} defaultOn={false}/>
export const BugMode = () => <div></div>




