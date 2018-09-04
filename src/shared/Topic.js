import React, { Component } from "react";
import HorizontalSlider from "./Slider";
import { fetchNews } from "./api";

class Topic extends Component {
  render() {
    return (
      <React.Fragment>
        <HorizontalSlider />
      </React.Fragment>
    );
  }
}

export default Topic;
