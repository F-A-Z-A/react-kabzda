import React from "react";

type ItemType = {
  title: string
  value: any
}

export type AccordionPropsType = {
  titleValue: string
  collapsed: boolean
  onChange: () => void
  items: ItemType[]
  onClick: (value: any) => void
}

export function Accordion(props: AccordionPropsType) {
  console.log("Accordion render")
  return <div>
    <AccordionTitle
      title={props.titleValue}
      onChange={props.onChange}
    />
    {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
  </div>
}

type AccordionTitlePropsType = {
  title: string
  onChange: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
  console.log("AccordionTitle render")
  return <h3 onClick={(event) => props.onChange()}>-- {props.title} --</h3>
}

type AccordionBodyPropsType = {
  items: ItemType[]
  onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
  console.log("AccordionBody render")
  return <ul>
    {props.items.map((i, index) =>
      <li key={index} onClick={() => {
        props.onClick(i.value)
      }}>{i.title}</li>
    )}
  </ul>
}


// ------------ Home Work ------------
// import React from "react";
//
// type AccordionPropsType = {
//   titleValue: string
//   collapsed: boolean
//   onChange: (value: boolean) => void
// }
//
// export function Accordion(props: AccordionPropsType) {
//   console.log("Accordion render")
//   return <div>
//     <AccordionTitle
//       title={props.titleValue}
//       collapsed={props.onChange}
//       value={props.collapsed}
//     />
//     {!props.collapsed && <AccordionBody/>}
//   </div>
// }
//
// type AccordionTitlePropsType = {
//   title: string
//   collapsed: (value: boolean) => void
//   value: boolean
// }
//
// function AccordionTitle(props: AccordionTitlePropsType) {
//   console.log("AccordionTitle render")
//   return <h3 onClick={() => props.collapsed(!props.value)}>-- {props.title} --</h3>
// }
//
// function AccordionBody() {
//   console.log("AccordionBody render")
//   return <ul>
//     <li>1</li>
//     <li>2</li>
//     <li>3</li>
//   </ul>
// }