import React, { useState } from "react";

type AccordionPropsType = {
  title: string;
};

export function UncontrolledAccordion(props: AccordionPropsType) {
  console.log("Accordion rendering");

  let [collapsed, setCollapsed] = useState<boolean>(false);

  const onClickTitleHandler = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <AccordionTitle title={props.title} onClick={onClickTitleHandler} collapsed={collapsed} />
      {!collapsed && <AccordionBody />}
    </>
  );
}

type AccordionTitlePropsType = {
  title: string;
  onClick: () => void;
  collapsed: boolean;
};

function AccordionTitle(props: AccordionTitlePropsType) {
  console.log("AccordionTitle rendering");
  const onClickHandler = () => {
    props.onClick();
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
