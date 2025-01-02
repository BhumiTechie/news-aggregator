import React from "react";

const CategoryCarousel = ({ categories, onSelectCategory }) => {
  return (
    <div className="flex space-x-4 overflow-x-scroll py-4">
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => onSelectCategory(category)}
          className="bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300"
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryCarousel;
