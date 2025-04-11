"use client";
import { Moon, CaretDown, Sun, CircleHalf } from "./icons";
import { useState } from "react";
import { useTheme } from "next-themes";

export const ThemeDropDown = () => {
  const [isOpened, setIsOpened] = useState(false);
  const { setTheme, theme } = useTheme();
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpened(!isOpened)}
        className="flex gap-[1px] items-center cursor-pointer"
      >
        {theme === "dark" ? (
          <Moon />
        ) : theme === "light" ? (
          <Sun />
        ) : (
          <CircleHalf />
        )}
        <CaretDown />
      </button>

      {isOpened && (
        <div className="absolute rounded-lg top-[2.5rem] right-0 w-fit h-auto bg-gradient-to-r from-violet-500 to-purple-500 dark:bg-gradient-to-r dark:from-violet-950 dark:to-purple-950">
          <div className="flex flex-col gap-2 justify-start cursor-default">
            <div
              onClick={() => {
                setTheme("dark");
                setIsOpened(false);
              }}
              className="w-full flex gap-2 px-4 py-1 items-center hover:bg-purple-900/90 text-white"
            >
              <Moon /> <span>Dark</span>
            </div>
            <div
              onClick={() => {
                setTheme("light");
                setIsOpened(false);
              }}
              className="flex gap-2 px-4 py-[2px] items-center hover:bg-purple-900/90 text-white"
            >
              <Sun /> <span>Light</span>
            </div>
            <div
              onClick={() => {
                setTheme("system");
                setIsOpened(false);
              }}
              className="flex gap-2 px-4 py-1 items-center hover:bg-purple-900/90 text-white"
            >
              <CircleHalf /> <span>System</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
