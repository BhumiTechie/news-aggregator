import React from "react";
import { useAppContext } from "../context/AppContext";
import NewsCard from "../Components/Newscard";

const Bookmark = () => {
  const { bookmarks, setBookmarks } = useAppContext();

  const removeBookmark = (article) => {
    setBookmarks((prev) => prev.filter((item) => item.url !== article.url));
  };

  return (
    <div className="max-w-7xl mx-auto py-6">
      <h1 className="text-4xl font-bold mb-6">Bookmarks</h1>
      {bookmarks.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookmarks.map((article, index) => (
            <NewsCard
              key={index}
              article={article}
              isBookmarked
              onBookmark={removeBookmark}
            />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">You have no bookmarks yet.</p>
      )}
    </div>
  );
};

export default Bookmark;
