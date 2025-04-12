export const getCarData = async (queryParams: string) => {
  const response = await fetch(
    `http://localhost:3000/api/cars/?${queryParams}`,
    {
      cache: "default",
      method: "GET",
    }
  );

  const data = await response.json();
  return data;
};
