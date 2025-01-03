import React from "react";

const Newscard = ({ article, isBookmarked, onBookmark }) => {
  const imageUrl = article.urlToImage || "https://via.placeholder.com/150";

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <img src={imageUrl} alt={article.title || "News Image"} className="rounded-md mb-4" />
      <h3 className="text-lg font-bold">{article.title}</h3>
      <p className="text-sm text-gray-600">{article.description}</p>
      <div className="mt-4 flex justify-between items-center">
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-500 hover:underline"
        >
          Read more
        </a>
        <button
          onClick={() => onBookmark(article)}
          className={`p-2 rounded-full ${
            isBookmarked ? "bg-red-500 text-white" : "bg-gray-200 text-gray-600"
          } hover:bg-red-600`}
        >
          {isBookmarked ? "Unbookmark" : "Bookmark"}
        </button>
      </div>
    </div>
  );
};

export default Newscard;
