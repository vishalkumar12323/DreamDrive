import {
  MoneyIcon,
  UserIcon,
  EngineIcon,
  TransmissionIcon,
  FuelIcon,
} from "./icons";

// import Image from "next/image";
import { CarDataType } from "@/app/types";
export const Card = ({ data }: { data?: CarDataType }) => {
  return (
    <>
      {data &&
        data.length > 0 &&
        data.map((d) => {
          return (
            <div
              key={d.id}
              className=" w-full min-h-[230px] bg-gradient-to-r from-violet-500 to-purple-500 dark:bg-gradient-to-r dark:from-violet-950 dark:to-purple-950 rounded"
            >
              <div className="py-4 px-2 flex gap-4">
                <div className="overflow-hidden rounded w-[250px]">
                  <img
                    src={d.images.split(",")[0] || ""}
                    alt="img"
                    className="max-w-[250px] max-h-[200px] rounded hover:scale-105 brightness-90 duration-200 hover:filter hover:brightness-110 hover:saturate-150"
                  />
                </div>
                <div className="w-full flex justify-between">
                  <div className="w-[550px]">
                    <div className="text-xl md:text-2xl">{d.name}</div>
                    <div className="max-w-[75%] flex flex-col gap-3 mt-4">
                      <div className="flex justify-between items-center">
                        <div className="flex gap-3">
                          <span>Seats:</span>
                          <div>{d.seats}</div>
                        </div>
                        <div className="flex gap-3">
                          <span>FuelType:</span>
                          <div className="flex gap-[1px] items-center">
                            <FuelIcon />
                            {d.fuelType}
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex gap-3">
                          <span>Ownership:</span>
                          <div className="flex gap-[1px] items-center">
                            <UserIcon />
                            {d.ownership}
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <span>Engine:</span>
                          <div className="flex gap-[1px] items-center">
                            <EngineIcon />
                            {d.engine}
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex gap-3">
                          <span>Transmission:</span>
                          <div className="flex gap-[1px] items-center">
                            <TransmissionIcon />
                            {d.transmission}
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <span>Price:</span>
                          <div className="flex gap-[1px] items-center">
                            <MoneyIcon />
                            {d.price}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-end w-fit">
                    <button className="w-fit px-4 py-2 border border-purple-800 rounded shadow-md hover:bg-slate-900 transition-colors">
                      Get Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};
