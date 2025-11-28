import React from 'react';

// --- 1. ProductCard Component ---
// This component provides the structural layout and styling for a single product card.
// You can replace the placeholder content (or use props) for dynamic data.
const ProductCard = ({data}) => {
  return (
    <div className="
      bg-gray-800 
      rounded-xl 
      shadow-2xl 
      hover:shadow-indigo-500/50 
      transition-all 
      duration-300 
      transform hover:-translate-y-1 
      overflow-hidden 
      flex flex-col 
      h-full
      max-w-sm mx-auto
      border border-gray-700
    ">

      {/* Product Image Placeholder */}
      <div className="h-48 w-full bg-gray-700 overflow-hidden relative">
        <img
          src={data.image}
          alt="Product Placeholder"
          className="w-full h-full object-contain p-3"
          onError={(e) => e.currentTarget.src = "https://placehold.co/600x400/9CA3AF/000000?text=No+Image"}
        />
        {/* Sale/Badge Tag */}
        <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
          New
        </span>
      </div>

      {/* Card Content Area */}
      <div className="p-5 flex flex-col flex-grow">

        {/* Title and Rating Placeholder */}
        <div className="mb-2">
          <h3 className="text-xl font-bold text-white line-clamp-2">
            {/* Title Tag */}
            {data.title}
            {/* End Title Tag */}
          </h3>
          <div className="flex items-center text-yellow-400 text-sm mt-1">
            {/* Rating Placeholder */}
            {(data.rating.rate > 4) ? `★★★★★ (${data.rating.count}reviews)` : `★★★ (${data.rating.count}reviews)`}
          </div>
        </div>

        {/* Description Placeholder */}
        <p className="text-gray-400 text-sm mb-4 flex-grow line-clamp-3">
          {/* Description Tag */}
          {data.description}
          {/* End Description Tag */}
        </p>

        {/* Price and Action */}
        <div className="mt-auto">
          <div className="flex items-center justify-between mb-4">
            <span className="text-3xl font-extrabold text-indigo-400">
              {/* Price Tag */}
              ${data.price}
              {/* End Price Tag */}
            </span>
            <span className="text-sm line-through text-gray-500">
              $199.99
            </span>
          </div>

          <button className="
            w-full 
            py-3 
            bg-indigo-600 
            text-white 
            font-semibold 
            rounded-lg 
            shadow-lg
            shadow-indigo-500/20
            hover:bg-indigo-500 
            transition-colors 
            duration-200 
            focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50
          ">
            {/* Action Button Tag */}
            Add to Cart
            {/* End Action Button Tag */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;