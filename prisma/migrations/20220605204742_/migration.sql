-- CreateTable
CREATE TABLE "users" (
    "guid" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "last_name" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "admin" BOOLEAN DEFAULT false,
    "image_url" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "users_pkey" PRIMARY KEY ("guid")
);

-- CreateTable
CREATE TABLE "animes" (
    "guid" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "link" TEXT,
    "comming_soon" BOOLEAN NOT NULL,
    "date" TIMESTAMP(3),
    "genre" TEXT NOT NULL,
    "seasons" INTEGER NOT NULL,
    "episodes" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "synopsis" TEXT NOT NULL,
    "folder" TEXT NOT NULL,
    "trailer" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "animes_pkey" PRIMARY KEY ("guid")
);

-- CreateTable
CREATE TABLE "movies" (
    "guid" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "link" TEXT,
    "comming_soon" BOOLEAN NOT NULL,
    "date" TIMESTAMP(3),
    "genre" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "direction" TEXT NOT NULL,
    "synopsis" TEXT NOT NULL,
    "folder" TEXT NOT NULL,
    "trailer" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "movies_pkey" PRIMARY KEY ("guid")
);

-- CreateTable
CREATE TABLE "series" (
    "guid" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "link" TEXT,
    "comming_soon" BOOLEAN NOT NULL,
    "date" TIMESTAMP(3),
    "genre" TEXT NOT NULL,
    "seasons" INTEGER NOT NULL,
    "episodes" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "synopsis" TEXT NOT NULL,
    "folder" TEXT NOT NULL,
    "trailer" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "series_pkey" PRIMARY KEY ("guid")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_guid_key" ON "users"("guid");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "animes_guid_key" ON "animes"("guid");

-- CreateIndex
CREATE UNIQUE INDEX "animes_name_key" ON "animes"("name");

-- CreateIndex
CREATE UNIQUE INDEX "movies_guid_key" ON "movies"("guid");

-- CreateIndex
CREATE UNIQUE INDEX "movies_name_key" ON "movies"("name");

-- CreateIndex
CREATE UNIQUE INDEX "series_guid_key" ON "series"("guid");

-- CreateIndex
CREATE UNIQUE INDEX "series_name_key" ON "series"("name");
