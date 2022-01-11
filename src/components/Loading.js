import React from "react";

export default function Loading() {
  return (
    <span className="flex h-12 w-12 absolute left-1/2 top-1/2">
      <span className="animate-ping absolute inline-flex h-12 w-12 rounded-full bg-gray-500 dark:bg-gray-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-12 w-12 bg-gray-600 dark:bg-gray-500"></span>
    </span>
  );
}
