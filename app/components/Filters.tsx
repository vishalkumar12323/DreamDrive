"use client";
import { useEffect, useState } from "react";
import { Check, UnCheck } from "./icons";

type TBudget = string[];
type TLocation = string[];
type TOwner = string[];
type TModel = string[];
type TFuelType = string[];

interface IQueryType {
  budget: TBudget;
  location: TLocation;
  model: TModel;
  owner: TOwner;
  fuelType: TFuelType;
}
const filterOptions = [
  {
    id: "budget",
    type: "budget",
    options: ["0 to 1500", "1500 to 3000", "3000 to 7000"],
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
    type: "fuel type",
    options: ["petrol", "diesel", "electric", "cng", "hybrid"],
  },
];

export const Filters = ({ error = null }) => {
  const [query, setQuery] = useState({});
  const [openFilters, setOpenFilters] = useState({
    budget: true,
    location: true,
    model: true,
    owner: true,
  });
  const [checkedFilters, setCheckedFilters] = useState({});

  const toggleFilterList = (listId) =>
    setOpenFilters((prev) => ({ ...prev, [listId]: !prev[listId] }));

  const handleFilterUpdate = (option, type) => {
    const key = type;
    const isActive = query[key]?.includes(option);

    setCheckedFilters((prev) => ({
      ...prev,
      [option]: !prev[option],
    }));

    setQuery((prev) => ({
      ...prev,
      [key]: isActive
        ? prev[key].filter((item) => item !== option)
        : [...(prev[key] || []), option],
    }));
  };

  const clearFilters = () => {
    setCheckedFilters({});
    setQuery({});
  };

  useEffect(() => {
    console.log(query);
  }, [query]);

  return (
    <aside className="py-6 px-3 mx-4 md:mx-0 md:px-0 w-full md:w-[25%] h-full flex justify-start items-start flex-col">
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
                    {/* {filter.type === "rating" && (
                      <span className="capitalize text-[13px] hover:font-medium">
                        star
                      </span>
                    )} */}
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
