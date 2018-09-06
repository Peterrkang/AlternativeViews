import React, { Component } from "react";
import Slider from "react-rangeslider";
import PropTypes from "prop-types";

class HorizontalSlider extends Component {
  static propTypes = {
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
  };

  render() {
    const labels = {
      10: "Liberal",
      50: "Moderate",
      90: "Conservative"
    };

    return (
      <Slider
        min={0}
        max={100}
        value={this.props.value}
        tooltip={false}
        labels={labels}
        onChange={this.props.handleValueChange}
      />
    );
  }
}

export default HorizontalSlider;
