'use client';

import Link from "next/link";
import {
  MoneyIcon,
  UserIcon,
  EngineIcon,
  TransmissionIcon,
  FuelIcon,
} from "@/components/icons";
import Image from "next/image";
import { CarDataType } from "@/app/types";
import {
  Card as ShadcnCard,
  CardContent,
} from "@/components/ui/card";
import { Button } from "../ui/elements/button";
import { motion, AnimatePresence } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

export const Card = ({ data, view = "list" }: { data: CarDataType[], view?: string }) => {
  return (
    <motion.div
      layout
      variants={container}
      initial="hidden"
      animate="show"
      className={`w-full grid gap-4 transition-all duration-500 ease-in-out ${view === "grid"
        ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        : "grid-cols-1"
        }`}
    >
      <AnimatePresence mode="popLayout">
        {data && data.length > 0 ? (
          data.map((d, idx) => (
            <motion.div
              key={`${d.id}-${view}-${idx}`}
              variants={item}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                duration: 0.3
              }}
            >
              <ShadcnCard
                className="w-full min-h-[230px] bg-white/10 dark:bg-slate-900/10 backdrop-blur-md backdrop-filter text-slate-900 dark:text-white border-gray-300 dark:border-violet-900 transition-all duration-300 hover:shadow-lg"
              >
                <CardContent className={`py-4 px-2 md:px-2 flex ${view === "grid" ? "flex-col" : "flex-col md:flex-row"
                  } gap-4 transition-all duration-300`}>
                  <div className={`overflow-hidden rounded ${view === "grid" ? "w-full h-[200px]" : "w-full md:w-[250px]"} px-2 md:px-0`}>
                    <Image
                      width={view === "grid" ? 400 : 250}
                      height={200}
                      src={d.images.split(",")[0] || ""}
                      alt="img"
                      className={`${view === "grid" ? "w-full h-[200px] object-cover" : "max-w-[250px] max-h-[200px] min-w-full"} rounded hover:scale-105 brightness-90 duration-200 hover:filter hover:brightness-110 hover:saturate-150`}
                    />
                  </div>
                  <div className={`w-full flex flex-col ${view === "grid" ? "" : "md:flex-row"} justify-between`}>
                    <div className={view === "grid" ? "w-full" : "md:w-[550px]"}>
                      <div className={`${view === 'grid' ? 'text-[16px] md:text-[18px]' : 'text-xl md:text-2xl'}`}>{d.name}</div>
                      <div className={`w-full ${view === "grid" ? "text-[10px] md:text-[11px]" : "text-[14px] md:text-[16px] md:max-w-[75%]"} flex flex-col gap-3 mt-4`}>
                        <div className="flex justify-between flex-col md:flex-row md:items-center">
                          <div className="flex gap-3">
                            <span>Seats:</span>
                            <div>{d.seats}</div>
                          </div>
                          <div className="flex gap-3">
                            <span>FuelType:</span>
                            <div className="flex items-center">
                              <FuelIcon />
                              {d.fuelType}
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between flex-col md:flex-row md:items-center">
                          <div className="flex gap-3">
                            <span>Ownership:</span>
                            <div className="flex items-center">
                              <UserIcon />
                              {d.ownership}
                            </div>
                          </div>
                          <div className="flex gap-3">
                            <span>Engine:</span>
                            <div className="flex items-center">
                              <EngineIcon />
                              {d.engine}
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between flex-col md:flex-row md:items-center">
                          <div className="flex gap-3">
                            <span>Transmission:</span>
                            <div className="flex items-center">
                              <TransmissionIcon />
                              {d.transmission}
                            </div>
                          </div>
                          <div className="flex gap-3">
                            <span>Price:</span>
                            <div className="flex items-center">
                              <MoneyIcon />
                              {d.price} lakh
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex mt-4 items-end w-fit">
                      <Button
                        variant={"outline"}
                        className="w-fit px-4 py-2"
                      >
                        <Link href={`/about/${d.id}/${d.name}`}>Get Details</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </ShadcnCard>
            </motion.div>
          ))
        ) : (
          <motion.div
            key="no-data"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full text-center text-xl"
          >
            No cars found
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
