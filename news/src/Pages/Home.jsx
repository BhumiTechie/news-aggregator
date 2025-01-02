import React, { useState, useEffect } from "react";
import NewsCard from "../components/NewsCard";
import { fetchLatestNews } from "../api/NewsApi";

const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const news = await fetchLatestNews();
      setArticles(news);
    };
    getNews();
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-6">
      <h1 className="text-4xl font-bold mb-6">Latest News</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>
    </div>
  );
};

export default Home;
