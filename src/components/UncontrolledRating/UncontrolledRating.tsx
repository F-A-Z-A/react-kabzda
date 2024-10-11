import React, { useState } from "react";

type RatingPropsType = {
  value?: 0 | 1 | 2 | 3 | 4 | 5;
};

type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

export function UncontrolledRating(props: RatingPropsType) {
  console.log("Rating rendering");
  const [value, setValue] = useState<RatingValueType>(props.value ? props.value : 0);
  const onClickValueHandler = (value: RatingValueType) => {
    setValue(value);
  };

  return (
    <div>
      <Star selected={value > 0} setValue={() => setValue(1)} />
      <Star selected={value > 1} setValue={() => setValue(2)} />
      <Star selected={value > 2} setValue={() => setValue(3)} />
      <Star selected={value > 3} setValue={() => setValue(4)} />
      <Star selected={value > 4} setValue={() => setValue(5)} />
    </div>
  );
}

type StarPropsType = {
  selected: boolean;
  // value: RatingValueType;
  setValue: () => void;
};

function Star(props: StarPropsType) {
  console.log("Star rendering");
  const onClickHandler = () => {
    props.setValue();
  };
  return (
    <span style={{ cursor: "pointer" }} onClick={onClickHandler}>
      {props.selected ? <b>STAR </b> : "STAR "}
    </span>
  );
}
