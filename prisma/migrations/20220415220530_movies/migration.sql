-- CreateTable
CREATE TABLE "movies" (
    "guid" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "link" TEXT,
    "comming_soon" BOOLEAN NOT NULL,
    "date" TIMESTAMP(3),
    "quantity_likes" INTEGER DEFAULT 0,
    "quantity_dislikes" INTEGER DEFAULT 0,
    "genre" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "direction" TEXT NOT NULL,
    "synopsis" TEXT NOT NULL,
    "folder" TEXT NOT NULL,
    "trailer" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "movies_pkey" PRIMARY KEY ("guid")
);

-- CreateIndex
CREATE UNIQUE INDEX "movies_guid_key" ON "movies"("guid");

-- CreateIndex
CREATE UNIQUE INDEX "movies_name_key" ON "movies"("name");
