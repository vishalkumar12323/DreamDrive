/*
  Warnings:

  - Added the required column `model` to the `cars` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "cars" ADD COLUMN     "model" TEXT NOT NULL;
