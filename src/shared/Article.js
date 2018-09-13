import React from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import styles from "./styles.css";

const Article = ({ article }) => (
  <div className={styles.article}>
    <img
      className={styles.articleImg}
      src={article.urlToImage}
      alt={article.title}
    />
    <div className={styles.articleContent}>
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      <a href={article.url}>Read More..</a>
    </div>
  </div>
);

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    urlToImage: PropTypes.string.isRequired
  })
};

export default withStyles(styles)(Article);
