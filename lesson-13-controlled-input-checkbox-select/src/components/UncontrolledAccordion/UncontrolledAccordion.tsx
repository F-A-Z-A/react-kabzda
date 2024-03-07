import React, {useState} from "react";

type AccordionPropsType = {
  titleValue: string
  // collapsed: boolean
}

export function UncontrolledAccordion(props: AccordionPropsType) {
  console.log("Accordion rendering")
  
  const [collapsed, setCollapsed] = useState(false);
  
  // const onClickHandler = () => setCollapsed(!collapsed)
  
  return <div>
    {/*<AccordionTitle title={props.titleValue} onClickHandler={onClickHandler}/>*/}
    <AccordionTitle title={props.titleValue} onClick={() => {
      setCollapsed(!collapsed)
    }}/>
    {!collapsed && <AccordionBody/>}
  </div>
}

type AccordionTitlePropsType = {
  title: string
  onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
  console.log("AccordionTitle render")
  return <h3 onClick={props.onClick}>-- {props.title} --</h3>
}

function AccordionBody() {
  console.log("AccordionBody render")
  return <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>
}