import { NextRequest, NextResponse } from "next/server";
import { prisma as db } from "@/app/db/database";

export const GET = async (req: NextRequest) => {
  const id = new URL(req.url).pathname.split("/")[3];
  try {
    const data = await db.car.findUnique({ where: { id } });

    return NextResponse.json({ data }, { status: 200 });
  } catch (err) {
    console.log("error getting cars data ", err);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
};
