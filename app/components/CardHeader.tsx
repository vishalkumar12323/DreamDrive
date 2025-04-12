import React from "react";
import { GridBox, ListBox } from "./icons";

export const CardHeader = () => {
  return (
    <div className="w-full flex p-2 bg-gradient-to-r from-violet-500 to-purple-500 dark:bg-gradient-to-r dark:from-violet-950 dark:to-purple-950 rounded">
      <div className="w-full flex justify-end items-center gap-[2px]">
        <button className="focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg p-[5px]">
          <abbr title="grid-view">
            <GridBox />
          </abbr>
        </button>
        <button className="focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg p-1">
          <abbr title="list-view">
            <ListBox />
          </abbr>
        </button>
      </div>
    </div>
  );
};
