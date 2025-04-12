import { CarDataType } from "@/app/types";

const bash_url = "http://localhost:3000/api";
export const getCarData = async (
  queryParams: string
): Promise<CarDataType[]> => {
  const response = await fetch(`${bash_url}/cars/?${queryParams}`, {
    cache: "no-cache",
    method: "GET",
  });

  const data = await response.json();
  return data;
};

export const getCarDataById = async (id: string): Promise<CarDataType> => {
  const response = await fetch(`${bash_url}/car/${id}`, {
    cache: "no-cache",
    method: "GET",
  });

  const { data } = await response.json();
  return data;
};
