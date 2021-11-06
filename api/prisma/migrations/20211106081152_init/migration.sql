/*
  Warnings:

  - Made the column `backgroundFallback` on table `Category` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Category` MODIFY `backgroundFallback` VARBINARY(3) NOT NULL DEFAULT 0xffffff;
