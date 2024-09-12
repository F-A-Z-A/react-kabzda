import React, { useState } from "react";

type AccordionPropsType = {
  title: string;
};

export function UncontrolledAccordion(props: AccordionPropsType) {
  console.log("Accordion rendering");

  let [collapsed, setCollapsed] = useState(false);

  const onClickTitleHandler = (value: boolean) => {
    setCollapsed(value);
  };

  return (
    <>
      <AccordionTitle title={props.title} onClickTitleHandler={onClickTitleHandler} collapsed={collapsed} />
      {!collapsed && <AccordionBody />}
    </>
  );
}

type AccordionTitlePropsType = {
  title: string;
  onClickTitleHandler: (value: boolean) => void;
  collapsed: boolean;
};

function AccordionTitle(props: AccordionTitlePropsType) {
  console.log("AccordionTitle rendering");
  const onClickHandler = () => {
    props.onClickTitleHandler(!props.collapsed);
  };
  return (
    <h3 onClick={onClickHandler} style={{ cursor: "pointer" }}>
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
