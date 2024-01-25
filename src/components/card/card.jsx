import React from "react";


const ProductCard = ({ id, title, image, description }) => {
    return (
      <div className="max-w-sm mx-auto bg-white rounded overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105">
        <img className="w-full h-48 object-cover" src={image} alt={title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base line-clamp-2">{description}</p>
        </div>
      </div>
    );
  };
  

  export default ProductCard