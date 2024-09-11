import React from "react";
import "./App.css";
import { OnOff } from "./components/OnOff/OnOff";
import { UncontrolledAccordion } from "./components/UncontrolledAccordion/UncontrolledAccordion";
import { UncontrolledRating } from "./components/UncontrolledRating/UncontrolledRating";

export function App() {
  console.log("App rendering");
  return (
    <>
      {/*<PageTitle title={"APP component"} />*/}
      {/*<PageTitle title={"My friends"} />*/}
      {/*<Accordion title={"Menu"} collapsed={true} />*/}
      {/*<Accordion title={"Users"} collapsed={false} />*/}
      <UncontrolledAccordion title={"Menu"} />
      <UncontrolledAccordion title={"Users"} />
      <UncontrolledRating />
      {/*<Rating value={0} />*/}
      {/*<Rating value={1} />*/}
      {/*<Rating value={2} />*/}
      {/*<Rating value={3} />*/}
      {/*<Rating value={4} />*/}
      {/*<Rating value={5} />*/}
      <OnOff />
      {/*<OnOff />*/}
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
