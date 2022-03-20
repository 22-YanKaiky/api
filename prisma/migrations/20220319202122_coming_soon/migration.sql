-- CreateTable
CREATE TABLE "coming_soon" (
    "guid" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "synopsis" TEXT NOT NULL,
    "folder" TEXT NOT NULL,
    "trailer" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "coming_soon_pkey" PRIMARY KEY ("guid")
);

-- CreateIndex
CREATE UNIQUE INDEX "coming_soon_guid_key" ON "coming_soon"("guid");

-- CreateIndex
CREATE UNIQUE INDEX "coming_soon_name_key" ON "coming_soon"("name");
