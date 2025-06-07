import React from "react";
import { getCarDataById } from "@/app/handlers";
import {
  EngineIcon,
  FuelIcon,
  MoneyIcon,
  TransmissionIcon,
  UserIcon,
} from "@/components/icons";
import Image from "next/image";
import { Button } from "@/components/ui/elements/button";

const AboutPage = async ({
  params,
}: {
  params: Promise<{ slug: [key: string] }>;
}) => {
  const { slug } = await params;

  const data = await getCarDataById(slug[0]);
  return (
    <div className="max-w-screen-xl mx-2 w-full md:mx-auto bg-white/10 dark:bg-slate-900/10 backdrop-blur-md backdrop-filter text-slate-900 dark:text-white border border-gray-300 dark:border-violet-900/60 rounded-md shadow-md mt-2 md:mt-8">
      <div className="flex flex-col gap-3 p-4">
        <div className="text-xl md:text-2xl">{data.name}</div>

        <div className="flex gap-2 w-full h-[300px] overflow-hidden">
          {data &&
            data.images
              ?.split(",")
              .map((img) => (
                <Image
                  width={400}
                  height={400}
                  key={img + data.name}
                  src={img}
                  alt={data.name}
                  className="max-w-[400px] w-full max-h-[300px] hover:scale-105 brightness-90 duration-200 hover:filter hover:brightness-110 hover:saturate-150"
                />
              ))}
        </div>

        <div>
          <div className="w-full flex flex-col md:flex-row justify-between">
            <div className="w-[450px] md:w-[550px]">
              <div className="max-w-[75%] flex flex-col gap-3 mt-4">
                <div className="flex justify-between items-center">
                  <div className="flex gap-3">
                    <span>Seats:</span>
                    <div>{data.seats}</div>
                  </div>
                  <div className="flex gap-3">
                    <span>FuelType:</span>
                    <div className="flex gap-[1px] items-center">
                      <FuelIcon />
                      {data.fuelType}
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex gap-3">
                    <span>Ownership:</span>
                    <div className="flex gap-[1px] items-center">
                      <UserIcon />
                      {data.ownership}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span>Engine:</span>
                    <div className="flex gap-[1px] items-center">
                      <EngineIcon />
                      {data.engine || "1493 cc"}
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex gap-3">
                    <span>Transmission:</span>
                    <div className="flex gap-[1px] items-center">
                      <TransmissionIcon />
                      {data.transmission}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span>Price:</span>
                    <div className="flex gap-[1px] items-center">
                      <MoneyIcon />
                      {data.price} lakh
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-end w-fit mt-4 md:mt-0">
              <Button variant={"outline"} className="w-fit px-4 py-2">
                Meet the sheller
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
