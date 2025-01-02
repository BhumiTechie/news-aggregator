import React from "react";
import { useAppContext } from "../context/AppContext";

const Newscard = ({ article, isBookmarked = false, onBookmark }) => {
  const { bookmarks, setBookmarks } = useAppContext();

  const handleBookmark = () => {
    if (isBookmarked) {
      onBookmark(article);
    } else {
      setBookmarks([...bookmarks, article]);
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <img src={article.urlToImage} alt={article.title} className="w-full h-40 object-cover rounded-md" />
      <h2 className="text-lg font-bold my-2">{article.title}</h2>
      <p className="text-sm text-gray-500">{article.description}</p>
      <div className="flex justify-between items-center mt-4">
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Read more
        </a>
        <button onClick={handleBookmark} className="text-red-500">
          {isBookmarked ? "Remove" : "Bookmark"}
        </button>
      </div>
    </div>
  );
};

export default Newscard;
