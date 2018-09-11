import React, { Component } from "react";
import { HorizontalSlider } from "./RangeSlider";
import Carousel from "./Carousel";

class Topic extends Component {
  constructor(props) {
    super(props);
    let news;
    if (__isBrowser__) {
      news = window.__INITIAL_DATA__;
      delete window.__INITIAL_DATA__;
    } else {
      news = props.staticContext.data;
    }
    this.state = {
      news,
      loading: news ? false : true,
      value: 50
    };
  }

  componentDidMount() {
    if (!this.state.news) {
      this.fetchNews(this.props.match.params.name);
    }
  }

  fetchNews = topic => {
    this.setState(() => {
      loading: true;
    });

    this.props.fetchInitialData(topic).then(news =>
      this.setState(() => ({
        news,
        loading: false
      }))
    );
  };

  handleValueChange = value => {
    this.setState({ value });
  };

  render() {
    const { news, loading, value } = this.state;
    return loading ? (
      <h1>Loading...</h1>
    ) : (
        <React.Fragment>
          <Carousel articles={news.articles} value={value} />
          <HorizontalSlider
            value={value}
            handleValueChange={this.handleValueChange}
          />
        </React.Fragment>
      );
  }
}

export default Topic;
