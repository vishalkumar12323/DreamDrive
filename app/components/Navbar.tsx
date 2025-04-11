"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Car, Search } from "./icons";
import { ThemeDropDown } from "./theme-dorpdown";

export const Navbar = () => {
  const [isExpended, setIsExpended] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    console.log(query);
  }, [query]);
  return (
    <nav
      className={`dark:backdrop-blur-md dark:bg-gradient-to-r dark:from-violet-950 dark:to-purple-950 min-h-12 h-auto sticky top-0 left-0 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg shadow-sm m-2 md:m-4`}
    >
      <div className="w-full mx-auto max-w-screen-xl md:flex md:items-center md:justify-between h-full flex flex-wrap items-center justify-between py-2.5 pl-2 pr-1 md:px-2">
        <Link href="" className="flex items-center gap-1">
          <Car />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Dreamdrive
          </span>
        </Link>
        <div className="flex md:order-2 items-center gap-[2px] md:gap-4">
          <button
            type="button"
            data-collapse-toggle="navbar-search"
            aria-controls="navbar-search"
            aria-expanded="false"
            className="md:hidden text-gray-500 dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
            onClick={() => {
              setIsExpended(!isExpended);
            }}
          >
            <Search />
          </button>
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <Search width={1} height={1} />
            </div>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              id="search-navbar"
              className="block min-w-[30rem] w-full max-w-[30rem] px-2 py-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-purple-80 focus:ring-blue-500 focus:border-blue-500 dark:bg-purple-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search with cars names..."
              autoComplete="off"
            />
          </div>

          <ThemeDropDown />
        </div>
        <div
          className={`${
            isExpended ? "block" : "hidden"
          } items-center justify-between w-full md:flex md:w-auto md:order-1 transition duration-500`}
          id="navbar-search"
        >
          <div className="relative mt-3 md:hidden">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <Search />
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full px-2 py-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-purple-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search with cars names..."
              autoComplete="off"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};
