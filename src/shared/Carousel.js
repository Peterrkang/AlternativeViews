import React from "react";
import PropTypes from "prop-types";
import styles from './styles.css';
import withStyles from "isomorphic-style-loader/lib/withStyles";



const Slide = ({ articles }) => {
  return articles.map((article, index) => (
    <div key={index} className={styles.home}>
      <img src={article.urlToImage} />
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      <a href={article.url}>Read More..</a>
    </div>
  ));
};

Slide.propTypes = {
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

export default withStyles(styles)(Slide);