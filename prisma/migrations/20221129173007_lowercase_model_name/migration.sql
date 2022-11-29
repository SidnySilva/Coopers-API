/*
  Warnings:

  - You are about to drop the column `Message` on the `get_in_touch` table. All the data in the column will be lost.
  - Added the required column `message` to the `get_in_touch` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "get_in_touch" DROP COLUMN "Message",
ADD COLUMN     "message" VARCHAR(500) NOT NULL;

-- AlterTable
ALTER TABLE "tasks" ALTER COLUMN "done" DROP NOT NULL;
