-- CreateTable
CREATE TABLE "cars" (
    "id" TEXT NOT NULL,
    "car_name" TEXT NOT NULL,
    "fuel_type" TEXT NOT NULL,
    "car_seats" INTEGER NOT NULL,
    "car_engine" TEXT NOT NULL,
    "transmission" TEXT NOT NULL,
    "ownership" TEXT NOT NULL,
    "car_brand" TEXT NOT NULL,
    "car_price" DOUBLE PRECISION NOT NULL,
    "images" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "cars_pkey" PRIMARY KEY ("id")
);
