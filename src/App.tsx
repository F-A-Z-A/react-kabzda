import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {Select} from "./components/Select/Select";

const arr = [
  {value: 1, title: "Andrey"},
  {value: 2, title: "luda"},
  {value: 3, title: "Sergey"},
]

function App() {
  console.log("APP rendering")
  
  let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
  let [switchOn, setSwitchOn] = useState<boolean>(false)
  
  const onClick = (value: any) => console.log(`${value}: Click onClick`)
  const onChange = () => console.log("Click onChange")
  
  return <div className={"App"}>
    <OnOff on={switchOn} onChange={setSwitchOn}/>
    
    <Accordion
      titleValue={"Control"}
      collapsed={accordionCollapsed}
      onChange={() => setAccordionCollapsed(!accordionCollapsed)}
      onClick={onClick}
      items={arr}
    />
    
    <Rating
      value={ratingValue}
      onClick={setRatingValue}
    />
    
    <Select
      onChange={onChange}
      items={arr}
      value={"111"}
    />
    
    <br/> <br/> <br/>
    
    {/*<UncontrolledOnOff onChange={setSwitchOn}/>*/}
    {/*{switchOn.toString()}*/}
    
    {/*<UncontrolledAccordion titleValue={"UnControl"}/>*/}
    
    {/*<UncontrolledRating/>*/}
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