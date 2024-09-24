import React from "react";

type AccordionPropsType = {
  title: string;
  collapsed: boolean;
  onClick: (value: boolean) => void;
};

export function Accordion(props: AccordionPropsType) {
  console.log("Accordion rendering");
  const onclickHandler = () => {
    props.onClick(!props.collapsed);
  };
  return (
    <>
      <AccordionTitle title={props.title} onClick={onclickHandler} />
      {!props.collapsed && <AccordionBody />}
    </>
  );
}

type AccordionTitlePropsType = {
  title: string;
  onClick: () => void;
};

function AccordionTitle(props: AccordionTitlePropsType) {
  console.log("AccordionTitle rendering");
  const onclickHandler = () => {
    props.onClick();
  };
  return (
    <h3 onClick={onclickHandler} style={{ cursor: "pointer" }}>
      -- {props.title} --
    </h3>
  );
}

function AccordionBody() {
  console.log("AccordionBody rendering");
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  );
}
