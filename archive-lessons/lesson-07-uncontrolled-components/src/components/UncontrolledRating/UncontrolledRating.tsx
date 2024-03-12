// import React, {useState} from "react";
//
// type RatingPropsType = {
//   // value: 0 | 1 | 2 | 3 | 4 | 5
// }
//
// export function UncontrolledRating(props: RatingPropsType) {
//   console.log("Rating render")
//
//   const [value, setValue] = useState(0)
//
//   const onClickHandler = () => setValue(value + 1)
//
//   return (
//     <div>
//       <Star selected={value > 0} onClickHandler={onClickHandler}/>
//       <Star selected={value > 1} onClickHandler={onClickHandler}/>
//       <Star selected={value > 2} onClickHandler={onClickHandler}/>
//       <Star selected={value > 3} onClickHandler={onClickHandler}/>
//       <Star selected={value > 4} onClickHandler={onClickHandler}/>
//     </div>
//   )
// }
//
// type StarPropsType = {
//   selected: boolean
//   onClickHandler: () => void
// }
//
// function Star(props: StarPropsType) {
//   console.log("Star render");
//   return props.selected ?
//     <span><b>STAR </b></span> :
//     <span onClick={() => props.onClickHandler()}>STAR </span>;
// }

import React, {useState} from "react";

export function UncontrolledRating() {
  console.log("Rating render")
  
  const [stars, setStars] = useState([
    {id: 1, selected: false},
    {id: 2, selected: false},
    {id: 3, selected: false},
    {id: 4, selected: false},
    {id: 5, selected: false},
  ]);
  
  const onClickHandler = (clickedStarId: number) => {
    const updatedStars = stars.map((star) =>
      star.id <= clickedStarId ? {...star, selected: true} : {...star, selected: false}
    );
    setStars(updatedStars);
  };
  
  return (
    <div>
      {stars.map((star) => (
        <Star
          key={star.id}
          selected={star.selected}
          onClickHandler={() => onClickHandler(star.id)}
        />
      ))}
    </div>
  );
}

type StarPropsType = {
  selected: boolean;
  onClickHandler: () => void;
};

function Star(props: StarPropsType) {
  console.log("Star render");
  return props.selected ? (
    <span onClick={props.onClickHandler}>
      <b>STAR </b>
    </span>
  ) : (
    <span onClick={props.onClickHandler}>STAR </span>
  );
}