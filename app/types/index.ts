export type CarDataType = {
  id: string;
  name: string;
  fuelType: string;
  seats: number;
  engine: string | null;
  transmission: string;
  ownership: string;
  price: number;
  images: string;
  createdAt: Date;
}[];

export type TFilterOption = {
  id: string;
  type: string;
  options: string[];
};

export type TQuery = {
  [key: string]: string;
};

export type TOpenFilters = {
  [key: string]: boolean;
};

export type TCheckedFilters = {
  [key: string]: boolean;
};
