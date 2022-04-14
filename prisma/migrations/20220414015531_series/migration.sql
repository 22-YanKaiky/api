-- CreateTable
CREATE TABLE "series" (
    "guid" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "link" TEXT,
    "comming_soon" BOOLEAN NOT NULL,
    "date" TIMESTAMP(3),
    "like" BOOLEAN DEFAULT false,
    "dislike" BOOLEAN DEFAULT false,
    "quantity_likes" INTEGER DEFAULT 0,
    "quantity_dislikes" INTEGER DEFAULT 0,
    "genre" TEXT NOT NULL,
    "seasons" INTEGER NOT NULL,
    "episodes" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "synopsis" TEXT NOT NULL,
    "folder" TEXT NOT NULL,
    "trailer" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "series_pkey" PRIMARY KEY ("guid")
);

-- CreateIndex
CREATE UNIQUE INDEX "series_guid_key" ON "series"("guid");

-- CreateIndex
CREATE UNIQUE INDEX "series_name_key" ON "series"("name");
