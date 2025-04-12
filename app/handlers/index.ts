import { CarDataType } from "@/app/types";

const bash_url = process.env.NEXT_PUBLIC_API_BASE_URL;

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
