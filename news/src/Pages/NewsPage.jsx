import React, { useContext } from "react";
import Newscard from "../Components/Newscard";
import { AppContext } from "../context/AppContext";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";

const NewsPage = () => {
  const { news, bookmarks, setBookmarks } = useContext(AppContext); // Access news and bookmarks from AppContext

  const addBookmark = (article) => {
    if (!bookmarks.some((bookmark) => bookmark.url === article.url)) {
      setBookmarks((prev) => [...prev, article]);
    }
  };

  const removeBookmark = (article) => {
    setBookmarks((prev) => prev.filter((bookmark) => bookmark.url !== article.url));
  };

  return (
    <main className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8">Trending News</h2>
      {news.length === 0 ? (
        <p className="text-center text-gray-600">Loading news...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {news.map((article, index) => (
            <Newscard
              key={index}
              article={article}
              onBookmark={addBookmark}
              onRemoveBookmark={removeBookmark}
              isBookmarked={bookmarks.some((bookmark) => bookmark.url === article.url)}
              bookmarkIcon={
                bookmarks.some((bookmark) => bookmark.url === article.url) ? (
                  <FaBookmark className="text-yellow-500" />
                ) : (
                  <FaRegBookmark className="text-gray-600" />
                )
              }
            />
          ))}
        </div>
      )}
    </main>
  );
};

export default NewsPage;
