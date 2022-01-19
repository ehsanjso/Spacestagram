import React from "react";
import { format } from "date-fns";
import Heart from "./Heart";

export default function Card({
  date,
  explanation,
  hdurl,
  title,
  copyright,
  url,
  likePic,
  isLiked,
}) {
  return (
    <div className="relative flex flex-col bg-gray-50 rounded-xl dark:bg-gray-800 dark:highlight-white/5 overflow-hidden my-6 shadow-md">
      <img
        src={hdurl ? hdurl : url}
        className="w-full h-full object-cover rounded-t-xl shadow-sm"
        alt={title}
      />
      <div className="md:p-4 flex justify-between items-center text-xl bg-gray-200/40 dark:bg-gray-900/40">
        <p>{title}</p>
        <Heart
          like={() => {
            likePic(title);
          }}
          isLiked={isLiked}
        />
      </div>
      <div className="mb-4 md:p-4 text-center md:text-left space-y-4">
        <p className="text-sm font-medium text-justify">{explanation}</p>
      </div>
      <div className="right-0 bottom-0 absolute py-1 px-2 w-fit bg-gray-200/40 dark:bg-gray-900/40 text-sm rounded-tl-xl">
        <p>{format(new Date(date), "EEEE, LLLL d, yyyy")}</p>
      </div>
    </div>
  );
}
