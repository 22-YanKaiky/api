/*
  Warnings:

  - The `genre` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterEnum
ALTER TYPE "Genre" ADD VALUE 'prefer_not_anwer';

-- AlterTable
ALTER TABLE "animes" ADD COLUMN     "deletedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "movies" ADD COLUMN     "deletedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "series" ADD COLUMN     "deletedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "deletedAt" TIMESTAMP(3),
DROP COLUMN "genre",
ADD COLUMN     "genre" "Genre";
