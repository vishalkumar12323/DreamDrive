"use client";
import { Moon, Sun } from "@/components/icons";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export const ThemeDropDown = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, theme } = useTheme();
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpened(!isOpened)}
        className="w-9 h-9 flex items-center justify-center rounded-md bg-white/10 hover:bg-white/20 transition-colors"
      >
        {theme === "dark" ? (
          <Moon className="h-5 w-5 text-white" />
        ) : (
          <Sun className="h-5 w-5 text-white" />
        )}
      </button>

      {isOpened && (
        <div className="absolute rounded-md right-0 mt-2 min-w-[8rem] overflow-hidden bg-white/10 backdrop-blur-lg border border-white/20 p-1">
          <div className="flex flex-col gap-1">
            <button
              onClick={() => {
                setTheme("dark");
                setIsOpened(false);
              }}
              className="flex items-center gap-2 px-2 py-1.5 rounded-sm text-white hover:bg-white/20 text-sm"
            >
              <Moon className="h-4 w-4" /> <span>Dark</span>
            </button>
            <button
              onClick={() => {
                setTheme("light");
                setIsOpened(false);
              }}
              className="flex items-center gap-2 px-2 py-1.5 rounded-sm text-white hover:bg-white/20 text-sm"
            >
              <Sun className="h-4 w-4" /> <span>Light</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
