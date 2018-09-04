import React, { Component } from "react";
import Slider from "react-rangeslider";

class HorizontalSlider extends Component {
  state = { value: 50 };

  handleChange = value => {
    this.setState({ value });
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
        value={this.state.value}
        labels={labels}
        onChange={this.handleChange}
      />
    );
  }
}

export default HorizontalSlider;
