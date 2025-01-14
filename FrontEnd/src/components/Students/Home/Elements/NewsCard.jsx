// NewsCard.jsx
import React from 'react';
import './NewsCard.css'; // Ensure you have the corresponding CSS file

const NewsCard = ({ article }) => {
  return (
    <div className="news-card">
      <img src={article.image} alt={article.title} />
      <h3>{article.title}</h3>
      <p>{article.description}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
      <p><small>Source: {article.source.name}</small></p>
    </div>

  );
};

export default NewsCard;
