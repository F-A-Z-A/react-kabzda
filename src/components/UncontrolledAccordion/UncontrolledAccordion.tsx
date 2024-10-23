import React, { useReducer } from "react";
import { reducer, TOGGLE_COLLAPSED } from "./Reducer";

type AccordionPropsType = {
  title: string;
};

export function UncontrolledAccordion(props: AccordionPropsType) {
  console.log("Accordion rendering");

  // let [collapsed, setCollapsed] = useState<boolean>(false);
  let [state, dispatch] = useReducer(reducer, { collapsed: false });

  const onClickTitleHandler = () => {
    dispatch({ type: TOGGLE_COLLAPSED });
  };

  return (
    <>
      <AccordionTitle title={props.title} onClick={onClickTitleHandler} />
      {!state.collapsed && <AccordionBody />}
    </>
  );
}

type AccordionTitlePropsType = {
  title: string;
  onClick: () => void;
  // collapsed?: boolean;
};

function AccordionTitle(props: AccordionTitlePropsType) {
  // console.log("AccordionTitle rendering");
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
  // console.log("AccordionBody rendering");
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  );
}
