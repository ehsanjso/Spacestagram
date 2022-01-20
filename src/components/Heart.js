import React from "react";

export default function Heart({ isLiked = true, like }) {
  return (
    <button
      id="theme-toggle"
      type="button"
      className={`flex justify-center items-center text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg p-2.5 ${
        isLiked ? "animate-pulse text-red-500 dark:text-red-500" : ""
      }`}
      onClick={like}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z" />
      </svg>{" "}
      <p className="ml-1 text-base font-semibold">Like</p>
    </button>
  );
}
