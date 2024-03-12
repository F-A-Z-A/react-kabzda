import React, {useState} from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
  defaultValue?: RatingValueType
  onChange: (value: RatingValueType) => void
}

export function UncontrolledRating(props: RatingPropsType) {
  console.log("Rating render")
  
  const [value, setValue] = useState<RatingValueType>(props.defaultValue ? props.defaultValue : 0)
  
  // const onClickHandler = () => setValue(value + 1)
  
  return (
    <div>
      <Star selected={value > 0} setValue={() => {
        setValue(1);
        props.onChange(1)
      }}/>
      <Star selected={value > 1} setValue={() => {
        setValue(2);
        props.onChange(2)
      }}/>
      <Star selected={value > 2} setValue={() => {
        setValue(3);
        props.onChange(3)
      }}/>
      <Star selected={value > 3} setValue={() => {
        setValue(4);
        props.onChange(4)
      }}/>
      <Star selected={value > 4} setValue={() => {
        setValue(5);
        props.onChange(5)
      }}/>
    </div>
  )
}

type StarPropsType = {
  selected: boolean
  setValue: () => void
}

function Star(props: StarPropsType) {
  console.log("Star render");
  // return props.selected ? <span><b>STAR </b></span> : <span>STAR </span>;
  return <span onClick={props.setValue}>
    {props.selected ? <b>STAR </b> : "STAR "}
  </span>;
}

// import React, {useState} from "react";
//
// export function UncontrolledRating() {
//   console.log("Rating render")
//
//   const [stars, setStars] = useState([
//     {id: 1, selected: false},
//     {id: 2, selected: false},
//     {id: 3, selected: false},
//     {id: 4, selected: false},
//     {id: 5, selected: false},
//   ]);
//
//   const onClickHandler = (clickedStarId: number) => {
//     const updatedStars = stars.map((star) =>
//       star.id <= clickedStarId ? {...star, selected: true} : {...star, selected: false}
//     );
//     setStars(updatedStars);
//   };
//
//   return (
//     <div>
//       {stars.map((star) => (
//         <Star
//           key={star.id}
//           selected={star.selected}
//           onClickHandler={() => onClickHandler(star.id)}
//         />
//       ))}
//     </div>
//   );
// }
//
// type StarPropsType = {
//   selected: boolean;
//   onClickHandler: () => void;
// };
//
// function Star(props: StarPropsType) {
//   console.log("Star render");
//   return props.selected ? (
//     <span onClick={props.onClickHandler}>
//       <b>STAR </b>
//     </span>
//   ) : (
//     <span onClick={props.onClickHandler}>STAR </span>
//   );
// }