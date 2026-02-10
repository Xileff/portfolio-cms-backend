/*
  Warnings:

  - You are about to drop the column `mimeType` on the `medias` table. All the data in the column will be lost.
  - You are about to drop the column `size` on the `medias` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "medias" DROP COLUMN "mimeType",
DROP COLUMN "size",
ADD COLUMN     "metadata" JSONB;
