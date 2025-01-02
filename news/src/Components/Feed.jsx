import React, { useEffect, useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { fetchNewsByTopic } from "../api/newsAPI";
import NewsCard from "./NewsCard";

const Feed = () => {
  const { topics } = useContext(AppContext);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const allArticles = [];
      for (const topic of topics) {
        const topicArticles = await fetchNewsByTopic(topic);
        allArticles.push(...topicArticles);
      }
      setArticles(allArticles);
    };
    fetchArticles();
  }, [topics]);

  return (
    <div>
      <h1>Your News Feed</h1>
      {articles.map((article, index) => (
        <NewsCard key={index} article={article} />
      ))}
    </div>
  );
};

export default Feed;
