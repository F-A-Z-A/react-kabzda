import React, {useState} from "react";

type AccordionPropsType = {
  titleValue: string
  // collapsed: boolean
}

export function UncontrolledAccordion(props: AccordionPropsType) {
  console.log("Accordion rendering")
  
  const [collapsed, setCollapsed] = useState(false);
  
  return <div>
    <AccordionTitle title={props.titleValue}/>
    <button onClick={() => {
      setCollapsed(true)
    }}>
      Down
    </button>
    <button onClick={() => {
      setCollapsed(false)
    }}>
      Uppp
    </button>
    {!collapsed && <AccordionBody/>}
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