/*
  Warnings:

  - A unique constraint covering the columns `[studentId,gradeNumber]` on the table `Grade` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `gradeNumber` to the `Grade` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Grade" ADD COLUMN     "gradeNumber" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Grade_studentId_gradeNumber_key" ON "Grade"("studentId", "gradeNumber");
