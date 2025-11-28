import React from 'react';

/**
 * A static component that simply displays a themed loading spinner.
 * It is intended to be conditionally rendered by the parent component (e.g., App.jsx).
 */
const StaticLoading = () => {
  return (
    <div className="flex flex-col items-center justify-center p-10 mt-20 min-h-[300px]">
      {/* Simple Tailwind Spinner */}
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-500 mb-6"></div>
      <p className="text-2xl font-semibold text-indigo-400">
        Loading... Please wait.
      </p>
      <p className="text-base text-gray-500 mt-2">
        We're fetching the latest products for you.
      </p>
    </div>
  );
};

export default StaticLoading;