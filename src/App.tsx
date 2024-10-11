import React, { useState } from "react";
import "./App.css";
import { OnOff } from "./components/OnOff/OnOff";
import { UncontrolledAccordion } from "./components/UncontrolledAccordion/UncontrolledAccordion";
import { Rating } from "./components/Rating/Rating";
import { UncontrolledRating } from "./components/UncontrolledRating/UncontrolledRating";
import { Accordion } from "./components/Accordion/Accordion";
import { UncontrolledOnOff } from "./components/UncontrolledOnOff/UncontrolledOnOff";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

export function App() {
  const [ratingValue, setRatingValue] = useState<RatingValueType>(3);
  const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
  const [on, setOn] = useState<boolean>(true);
  console.log("App rendering");
  const accordionCollapsedHandler = () => {
    setAccordionCollapsed(!accordionCollapsed);
  };
  return (
    <>
      {/*<PageTitle title={"APP component"} />*/}
      {/*<PageTitle title={"My friends"} />*/}
      <hr />
      - Accordion -
      <Accordion title={"Menu"} collapsed={accordionCollapsed} onChange={accordionCollapsedHandler} />
      <hr />
      - UncontrolledAccordion -
      <UncontrolledAccordion title={"Menu"} />
      {/*<UncontrolledAccordion title={"Users"} />*/}
      <hr />
      - Rating -
      <Rating value={ratingValue} onClick={setRatingValue} />
      <hr />
      - UncontrolledRating -
      <UncontrolledRating />
      <hr />
      - OnOff -
      <OnOff on={on} onChange={setOn} />
      <hr />
      - UncontrolledOnOff -
      <UncontrolledOnOff />
    </>
  );
}

type PageTitlePropsType = {
  title: string;
};

function PageTitle(props: PageTitlePropsType) {
  console.log("PageTitle rendering");
  return <div>{props.title}</div>;
}
