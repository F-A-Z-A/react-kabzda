import React, { useState } from "react";

type RatingPropsType = {
  // value: 0 | 1 | 2 | 3 | 4 | 5;
};

export function UncontrolledRating(props: RatingPropsType) {
  console.log("Rating rendering");
  const [value, setValue] = useState(0);
  const onClickValueHandler = (value: number) => {
    setValue(value);
  };

  return (
    <div>
      <Star selected={value > 0} value={1} onClickValueHandler={onClickValueHandler} />
      <Star selected={value > 1} value={2} onClickValueHandler={onClickValueHandler} />
      <Star selected={value > 2} value={3} onClickValueHandler={onClickValueHandler} />
      <Star selected={value > 3} value={4} onClickValueHandler={onClickValueHandler} />
      <Star selected={value > 4} value={5} onClickValueHandler={onClickValueHandler} />
    </div>
  );
}

type StarPropsType = {
  selected: boolean;
  value: 0 | 1 | 2 | 3 | 4 | 5;
  onClickValueHandler: (value: number) => void;
};

function Star(props: StarPropsType) {
  console.log("Star rendering");
  const onClickHandler = () => {
    props.onClickValueHandler(props.value);
  };
  return props.selected ? (
    <span style={{ cursor: "pointer" }} onClick={onClickHandler}>
      <b>STAR </b>
    </span>
  ) : (
    <span style={{ cursor: "pointer" }} onClick={onClickHandler}>
      STAR{" "}
    </span>
  );
}
