/*
  Warnings:

  - You are about to drop the column `car_brand` on the `cars` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "cars" DROP COLUMN "car_brand",
ALTER COLUMN "car_engine" DROP NOT NULL;
