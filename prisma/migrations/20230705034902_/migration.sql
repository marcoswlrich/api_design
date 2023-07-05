/*
  Warnings:

  - You are about to drop the column `belongsToID` on the `Product` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id,belongsToId]` on the table `Product` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `belongsToId` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_belongsToID_fkey";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "belongsToID",
ADD COLUMN     "belongsToId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Product_id_belongsToId_key" ON "Product"("id", "belongsToId");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_belongsToId_fkey" FOREIGN KEY ("belongsToId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
