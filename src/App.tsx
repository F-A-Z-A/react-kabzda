import React from 'react';
import './App.css';
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";

function App() {
  
  console.log("APP rendering")
  return <div className={"App"}>
    <OnOff/>
    <OnOff/>
    
    <UncontrolledAccordion titleValue={"Menu"}/>
    {/*<Accordion titleValue={"Users"} collapsed={false}/>*/}
    
    <UncontrolledRating/>
    {/*<Rating value={3}/>*/}
  </div>
}

type PageTitlePropsType = {
  title: string
}

function PageTitle(props: PageTitlePropsType) {
  console.log("PageTitle render")
  return <h1>{props.title}</h1>
}

export default App;