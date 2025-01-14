import React, { useEffect, useState } from 'react';
import NewsCard from './NewsCard'; // Ensure this component exists

const NewsFetcher = ({ apiKey }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(`https://gnews.io/api/v4/search?q=tech&token=${apiKey}`);
        const data = await response.json();
        
        if (data.articles) {
          setArticles(data.articles);
        } else {
          throw new Error('No articles found');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [apiKey]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="news-grid"> {/* Wrap NewsCards inside the grid container */}
      {articles.map((article, index) => (
        <NewsCard key={index} article={article} />
      ))}
    </div>
  );
};

export default NewsFetcher;
