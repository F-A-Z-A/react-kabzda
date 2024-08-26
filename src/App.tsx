import React from "react";
import "./App.css";

export function App() {
  console.log("App rendering");
  return (
    <>
      <AppTitle />
      <Rating />
      <Accordion />
      <Rating />
    </>
  );
}

function AppTitle() {
  console.log("AppTitle rendering");
  return <>APP component</>;
}

function Rating() {
  console.log("Rating rendering");
  return (
    <>
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </>
  );
}

function Accordion() {
  console.log("Accordion rendering");
  return (
    <>
      <AccordionTitle />
      <AccordionBody />
    </>
  );
}

function AccordionTitle() {
  console.log("AccordionTitle rendering");
  return <h3>Меню</h3>;
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

function Star() {
  console.log("Star rendering");
  return <div>STAR</div>;
}
