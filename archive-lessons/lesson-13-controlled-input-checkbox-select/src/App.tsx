import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";

function App() {
  console.log("APP rendering")
  
  let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
  let [switchOn, setSwitchOn] = useState<boolean>(false)
  
  return <div className={"App"}>
    <OnOff on={switchOn} onChange={setSwitchOn}/>
    
    <Accordion
      titleValue={"Control"}
      collapsed={accordionCollapsed}
      onChange={() => setAccordionCollapsed(!accordionCollapsed)}
    />
    
    <Rating
      value={ratingValue}
      onClick={setRatingValue}
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


// ------------ Home Work ------------
// import React, {useState} from 'react';
// import './App.css';
// import {Accordion} from "./components/Accordion/Accordion";
// import {Rating, RatingValueType} from "./components/Rating/Rating";
// import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
// import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
// import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
//
// function App() {
//   console.log("APP rendering")
//
//   let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
//   let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
//
//   return <div className={"App"}>
//     <UncontrolledOnOff/>
//
//     <Accordion titleValue={"Users"}
//                collapsed={accordionCollapsed}
//                onChange={setAccordionCollapsed}/>
//
//     <Rating value={ratingValue}
//             onClick={setRatingValue}/>
//
//     <UncontrolledAccordion titleValue={"Menu"}/>
//
//     <UncontrolledRating/>
//   </div>
// }
//
// type PageTitlePropsType = {
//   title: string
// }
//
// function PageTitle(props: PageTitlePropsType) {
//   console.log("PageTitle render")
//   return <h1>{props.title}</h1>
// }
//
// export default App;