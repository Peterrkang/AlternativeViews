import React from "react";
import PropTypes from "prop-types";

const Slide = ({ articles }) => {
  return articles.map((article, index) => (
    <div key={index}>
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

export default Slide;
