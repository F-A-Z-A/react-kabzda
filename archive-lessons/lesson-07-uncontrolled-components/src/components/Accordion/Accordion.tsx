import React from "react";

type AccordionPropsType = {
  titleValue: string
  collapsed: boolean
}

export function Accordion(props: AccordionPropsType) {
  console.log("Accordion render")
  return <div>
    <AccordionTitle title={props.titleValue}/>
    {!props.collapsed && <AccordionBody/>}
  </div>
}

type AccordionTitlePropsType = {
  title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
  console.log("AccordionTitle render")
  return <h3>-- {props.title} --</h3>
}

function AccordionBody() {
  console.log("AccordionBody render")
  return <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>
}