"use client";
import { useEffect, useMemo, useState } from "react";
import { Check, UnCheck } from "./icons";
import { useRouter, useSearchParams, useParams } from "next/navigation";
import {
  TCheckedFilters,
  TFilterOption,
  TOpenFilters,
  TQuery,
} from "@/app/types";

const filterOptions: TFilterOption[] = [
  {
    id: "budget",
    type: "budget (lakh)",
    options: [
      "1.05 to 5.00",
      "5.25 to 10.00",
      "10.25 to 15.00",
      "15.25 to 20.00",
    ],
  },
  {
    id: "location",
    type: "location",
    options: ["Mumbai", "New Delhi", "Gurugram"],
  },
  {
    id: "model",
    type: "model",
    options: ["Tata", "Honda", "Toyota", "Thar"],
  },
  {
    id: "owner",
    type: "owner",
    options: ["1st owner", "2nd owner", "3rd owner"],
  },
  {
    id: "fuel-type",
    type: "fuelType",
    options: ["petrol", "diesel", "electric", "cng", "hybrid"],
  },
];

export const Filters = () => {
  const urlParams = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = useMemo(
    () => new URLSearchParams(searchParams),
    [searchParams]
  );

  console.log(urlParams);
  const [query, setQuery] = useState<TQuery>({});
  const [openFilters, setOpenFilters] = useState<TOpenFilters>({
    budget: true,
    location: true,
    model: true,
    owner: true,
  });
  const [checkedFilters, setCheckedFilters] = useState<TCheckedFilters>({});

  const toggleFilterList = (listId: string) =>
    setOpenFilters((prev) => ({ ...prev, [listId]: !prev[listId] }));

  const handleFilterUpdate = (option: string, type: string) => {
    const key = type === "budget (lakh)" ? "budget" : type;
    const isOptionActive = query[type]?.includes(option);

    if (isOptionActive) {
      setCheckedFilters((prev) => {
        const updatedFilters = { ...prev };
        delete updatedFilters[option];
        return updatedFilters;
      });

      setQuery((prev) => {
        const updatedQuery = { ...prev };
        delete updatedQuery[type];
        return updatedQuery;
      });
    } else {
      setCheckedFilters({ [option]: true });

      setQuery({
        [key]: option,
      });
    }
  };

  const clearFilters = (): void => {
    setCheckedFilters({});
    setQuery({});
    router.refresh();
  };

  useEffect(() => {
    Object.entries(query).forEach(([key, value]) => {
      params.set(key, String(value));
    });
    router.replace(`?${params.toString()}`);
  }, [query, params, router]);
  return (
    <aside className="md:sticky md:top-20 py-3 md:py-6 md:mx-0 md:px-0 w-full md:w-[30%] h-full flex justify-start items-start flex-col">
      <div className="w-full p-3 bg-gradient-to-r from-violet-500 to-purple-500 dark:bg-gradient-to-r dark:from-violet-950 dark:to-purple-950 rounded-lg text-slate-100 dark:text-white">
        <div className="mb-4 w-full flex justify-between items-center">
          <h2 className=" text-[16px] md:text-xl font-bold uppercase">
            Filters
          </h2>
          <button onClick={clearFilters}>
            <span className="text-[10px] md:text-[14px] uppercase cursor-pointer">
              Clear
            </span>
          </button>
        </div>
        <div className="w-full h-[0.8px] bg-gray-400 dark:bg-gray-700 hidden md:block"></div>

        <div className="w-full grid grid-cols-2 md:grid-cols-none mt-4">
          {filterOptions.map((filter) => (
            <div className="w-full" key={filter.id}>
              <div
                className="flex items-center gap-1 cursor-pointer"
                onClick={() => toggleFilterList(filter.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className={`bi bi-caret-right transform ${
                    openFilters[filter.id] ? "rotate-90" : "rotate-0"
                  }  transition-transform z-0 text-slate-100 dark:text-white`}
                  viewBox="0 0 16 16"
                >
                  <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753" />
                </svg>
                <span className="text-[14px] md:text-[16px] font-bold capitalize">
                  {filter.type}
                </span>
              </div>

              <ul
                className={`p-2 space-y-2 text-[11px] md:text-[13px]
                  ${openFilters[filter.id] ? "block" : "hidden"}
                `}
              >
                {filter.options.map((option) => (
                  <li
                    key={option}
                    onClick={() => handleFilterUpdate(option, filter.type)}
                    className="flex items-center gap-1 cursor-pointer filter-list"
                  >
                    {checkedFilters[option] ? <Check /> : <UnCheck />}
                    <span className="hover:font-medium">{option}</span>
                  </li>
                ))}
              </ul>
              <div className="my-3 w-full h-[0.8px] bg-gray-400 dark:bg-gray-700 hidden md:block"></div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};
