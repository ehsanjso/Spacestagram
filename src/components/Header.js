import React from "react";
import { Link } from "react-router-dom";
import { Toggle } from "./Toggle";

export default function Header() {
  return (
    <nav className="relative flex flex-col-reverse bg-gray-50 p-5 dark:bg-gray-800 dark:highlight-white/5 text-center shadow-md">
      <div className="w-160 mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="font-sans text-gray-900 dark:text-gray-300 uppercase text-xl tracking-widest"
        >
          Spacestagram
        </Link>

        <Toggle />
      </div>
    </nav>
  );
}
