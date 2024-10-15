import React from "react";

type ItemType = {
  title: string;
  value: any;
};

type AccordionType = {
  title: string;
  collapsed: boolean;
  onChange: () => void;
  items: ItemType[];
  onClick: (value: any) => void;
};

export function Accordion(props: AccordionType) {
  console.log("Accordion rendering");
  return (
    <>
      <AccordionTitle title={props.title} onChange={props.onChange} />
      {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick} />}
    </>
  );
}

type AccordionTitleType = {
  title: string;
  onChange: () => void;
};

function AccordionTitle(props: AccordionTitleType) {
  console.log("AccordionTitle rendering");
  return (
    <h3 onClick={(e) => props.onChange()} style={{ cursor: "pointer" }}>
      -- {props.title} --
    </h3>
  );
}

type AccordionBodyType = {
  items: ItemType[];
  onClick: (value: any) => void;
};

function AccordionBody(props: AccordionBodyType) {
  console.log("AccordionBody rendering");
  return (
    <ul>
      {props.items.map((i, index) => (
        <li key={index} onClick={() => props.onClick(i.value)} style={{ cursor: "pointer" }}>
          {i.title}
        </li>
      ))}
    </ul>
  );
}
