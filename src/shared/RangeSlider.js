import React from "react";
import Slider from "react-rangeslider";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import styles from "./styles.css";

export const HorizontalSlider = props => {
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

HorizontalSlider.propTypes = {
  value: PropTypes.number.isRequired,
  handleValueChange: PropTypes.func.isRequired
};

export default withStyles(styles)(HorizontalSlider);
