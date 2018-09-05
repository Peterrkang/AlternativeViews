import React from "react";
import Slider from "react-rangeslider";

const HorizontalSlider = props => {
  const labels = {
    10: "Liberal",
    50: "Moderate",
    90: "Conservative"
  };

  return (
    <Slider
      min={0}
      max={100}
      value={props.value}
      tooltip={false}
      labels={labels}
      onChange={props.handleValueChange}
    />
  );
};

export default HorizontalSlider;
