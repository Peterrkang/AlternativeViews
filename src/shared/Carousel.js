import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import Article from "./article.js";
import styles from "./styles.css";

class Slide extends React.Component {
  static propTypes = {
    articles: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        urlToImage: PropTypes.string.isRequired
      })
    ),
    value: PropTypes.number.isRequired
  };

  render() {
    return (
      <Slider
        infinite={true}
        lazyLoad={true}
        slidesToShow={1}
        fade={true}
        centerMode={true}
        className={styles.slickSlider}
      >
        {this.props.articles.map(article => (
          <Article key={article.url} article={article} />
        ))}
      </Slider>
    );
  }
}

export default withStyles(styles)(Slide);
