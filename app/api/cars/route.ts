import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/db/database";

export const GET = async (req: NextRequest) => {
  const url = new URL(req.url);

  const page = Number(url.searchParams.get("page")) || 1;
  const skip = (page - 1) * 3;

  const query = url.searchParams.get("query")?.toLowerCase() || undefined;
  const budget = url.searchParams.get("budget") || undefined;
  const fuelType = url.searchParams.get("fuelType")?.toLowerCase() || undefined;

  const seat = Number(url.searchParams.get("seat")) || undefined;
  const owner = url.searchParams.get("owner")?.toLowerCase() || undefined;
  const model = url.searchParams.get("model")?.toLowerCase() || undefined;

  const [startingPrice, endingPrice] = budget
    ? budget
        .toLowerCase()
        .split("to")
        .map((price) => Number(price.trim()))
    : [undefined, undefined];

  console.log(model);
  try {
    const cars = await prisma.car.findMany({
      where: {
        name: { contains: query, mode: "insensitive" },
        fuelType,
        seats: seat,
        ownership: owner,
        price: { gte: startingPrice, lte: endingPrice },
        model: { contains: model, mode: "insensitive" },
      },
      take: 3,
      skip: skip,
    });
    if (!cars)
      return NextResponse.json({ message: "data not found" }, { status: 404 });

    return NextResponse.json(cars, { status: 200 });
  } catch (err) {
    console.log("error getting cars data ", err);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
};
