import React, { useState, useEffect } from "react";
import Newscard from "../Components/Newscard";
import { fetchLatestNews } from "../api/NewsApi";
import { useAppContext } from "../context/AppContext";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const { bookmarks, setBookmarks } = useAppContext();

  useEffect(() => {
    const getNews = async () => {
      const news = await fetchLatestNews();
      setArticles(news);
    };
    getNews();
  }, []);

  const addBookmark = (article) => {
    if (!bookmarks.some((item) => item.url === article.url)) {
      setBookmarks([...bookmarks, article]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-24">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold">News App</h1>
          <p className="mt-4 text-lg">Stay Updated with the Latest News</p>
        </div>
      </header>

      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Top Headlines</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <Newscard
              key={index}
              article={article}
              isBookmarked={bookmarks.some((item) => item.url === article.url)}
              onBookmark={addBookmark}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;