import React from 'react';

const CategoryButton = ({ category, onClick }) => {
  return (
    <button 
      className='bg-gray-600 text-white py-2 px-4 rounded hover:bg-blue-600 '
      onClick={() => onClick(category)}
    >
      {category}
    </button>
  );
};

export default CategoryButton;
