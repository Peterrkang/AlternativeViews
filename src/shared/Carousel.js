import React from "react";
import PropTypes from "prop-types";

export const Slide = ({ articles }) => {
  return articles.map((article, index) => (
    <div key={index}>
      <img src={article.urlToImage} />
      <h2>{article.urlTitle}</h2>
      <p>{article.description}</p>
      <a href={article.url}>Read More..</a>
    </div>
  ));
};

Slide.propTypes = {
  articles: PropTypes.object.isRequired
};
