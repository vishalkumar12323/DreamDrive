'use client';

import React from "react";
import { GridBox, ListBox } from "@/components/icons";
import { Button } from "../ui/elements/button";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export const CardHeader = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const view = searchParams.get("view") || "list";

  const updateView = (newView: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("view", newView);
    router.push(`/?${params.toString()}`);
  };

  return (
    <div className="w-full flex p-2 bg-white/30 dark:bg-slate-900/40 backdrop-blur-md backdrop-filter rounded-md text-slate-900 dark:text-white border border-gray-300 dark:border-violet-900/60">
      <div className="w-full flex justify-end items-center gap-[2px]">
        <AnimatePresence mode="wait">
          <motion.div
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
          >
            <Button
              variant={view === "grid" ? "default" : "outline"}
              onClick={() => updateView("grid")}
              className="transition-all duration-300 ease-in-out"
            >
              <abbr title="grid-view">
                <GridBox className={`${view === 'grid' ? 'dark:text-black text-white' : 'dark:text-white text-black'}`} />
              </abbr>
            </Button>
          </motion.div>
          <motion.div
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
          >
            <Button
              variant={view === "list" ? "default" : "outline"}
              onClick={() => updateView("list")}
              className="transition-all duration-300 ease-in-out"
            >
              <abbr title="list-view">
                <ListBox className={`${view === 'grid' ? 'text-black' : 'dark:text-black text-white'}`} />
              </abbr>
            </Button>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
