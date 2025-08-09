import React from 'react';

const SkeletonCard = () => {
  return (
    <div className="w-full mt-10 rounded-xl shadow-md overflow-hidden bg-white animate-pulse">
      {/* Image Placeholder */}
      <div className="w-full h-[200px] bg-gray-300"></div>

      {/* Content Placeholder */}
      <div className="p-4 space-y-3">
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        <div className="h-4 bg-gray-300 rounded w-2/3"></div>
        <div className="h-4 bg-gray-300 rounded w-1/3"></div>
        <div className="h-10 bg-gray-300 rounded w-full"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;