import Link from "next/link";
import { getCarData } from "../handlers";
import {
  MoneyIcon,
  UserIcon,
  EngineIcon,
  TransmissionIcon,
  FuelIcon,
} from "./icons";
import Image from "next/image";

export const Card = async ({ queryString }: { queryString: string }) => {
  const data = await getCarData(queryString);

  return (
    <>
      {data && data.length > 0 ? (
        data.map((d) => {
          return (
            <div
              key={d.id}
              className=" w-full min-h-[230px] bg-gradient-to-r from-violet-500 to-purple-500 dark:bg-gradient-to-r dark:from-violet-950 dark:to-purple-950 rounded text-white"
            >
              <div className="py-4 px-2 md:px-2 flex flex-col md:flex-row gap-4">
                <div className="overflow-hidden w-full rounded md:w-[250px] px-2 md:px-0">
                  <Image
                    width={250}
                    height={200}
                    src={d.images.split(",")[0] || ""}
                    alt="img"
                    className="max-w-[250px] max-h-[200px] min-w-full rounded hover:scale-105 brightness-90 duration-200 hover:filter hover:brightness-110 hover:saturate-150"
                  />
                </div>
                <div className="w-full flex flex-col md:flex-row justify-between">
                  <div className="md:w-[550px]">
                    <div className="text-xl md:text-2xl">{d.name}</div>
                    <div className="w-full md:max-w-[75%] flex flex-col gap-3 mt-4">
                      <div className="flex justify-between flex-col md:flex-row md:items-center text-[14px] md:text-[18px]">
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
                      <div className="flex justify-between flex-col md:flex-row md:items-center text-[14px] md:text-[18px]">
                        <div className="flex gap-3">
                          <span>Ownership:</span>
                          <div className="flex  items-center">
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
                      <div className="flex justify-between flex-col md:flex-row md:items-center text-[14px] md:text-[18px]">
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
                    <Link
                      href={`/about/${d.id}/${d.name}`}
                      className="w-fit px-4 py-2 border border-purple-800 rounded shadow-md hover:bg-slate-900 transition-colors"
                    >
                      Get Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <>
          <div className="flex justify-center items-center min-h-screen">
            No data found, Search with other words.
          </div>
        </>
      )}
    </>
  );
};
