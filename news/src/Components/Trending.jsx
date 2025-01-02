import React, { useEffect, useState } from "react";
import NewsCard from "../Components/Newscard";
import { fetchTrendingNews } from "../api/NewsApi";

const Trending = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getTrendingNews = async () => {
      const news = await fetchTrendingNews();
      setArticles(news);
    };
    getTrendingNews();
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-6">
      <h1 className="text-4xl font-bold mb-6">Trending News</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>
    </div>
  );
};

export default Trending;
