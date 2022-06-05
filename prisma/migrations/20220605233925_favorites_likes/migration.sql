-- CreateTable
CREATE TABLE "user_anime_favorites" (
    "guid" UUID NOT NULL,
    "user_guid" UUID NOT NULL,
    "anime_guid" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "user_anime_favorites_pkey" PRIMARY KEY ("guid")
);

-- CreateTable
CREATE TABLE "user_movie_favorites" (
    "guid" UUID NOT NULL,
    "user_guid" UUID NOT NULL,
    "movie_guid" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "user_movie_favorites_pkey" PRIMARY KEY ("guid")
);

-- CreateTable
CREATE TABLE "user_serie_favorites" (
    "guid" UUID NOT NULL,
    "user_guid" UUID NOT NULL,
    "serie_guid" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "user_serie_favorites_pkey" PRIMARY KEY ("guid")
);

-- CreateTable
CREATE TABLE "user_anime_likes" (
    "guid" UUID NOT NULL,
    "user_guid" UUID NOT NULL,
    "anime_guid" UUID NOT NULL,
    "value" BOOLEAN,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "user_anime_likes_pkey" PRIMARY KEY ("guid")
);

-- CreateTable
CREATE TABLE "user_movie_likes" (
    "guid" UUID NOT NULL,
    "user_guid" UUID NOT NULL,
    "movie_guid" UUID NOT NULL,
    "value" BOOLEAN,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "user_movie_likes_pkey" PRIMARY KEY ("guid")
);

-- CreateTable
CREATE TABLE "user_serie_likes" (
    "guid" UUID NOT NULL,
    "user_guid" UUID NOT NULL,
    "serie_guid" UUID NOT NULL,
    "value" BOOLEAN,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "user_serie_likes_pkey" PRIMARY KEY ("guid")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_anime_favorites_guid_key" ON "user_anime_favorites"("guid");

-- CreateIndex
CREATE UNIQUE INDEX "user_movie_favorites_guid_key" ON "user_movie_favorites"("guid");

-- CreateIndex
CREATE UNIQUE INDEX "user_serie_favorites_guid_key" ON "user_serie_favorites"("guid");

-- CreateIndex
CREATE UNIQUE INDEX "user_anime_likes_guid_key" ON "user_anime_likes"("guid");

-- CreateIndex
CREATE UNIQUE INDEX "user_movie_likes_guid_key" ON "user_movie_likes"("guid");

-- CreateIndex
CREATE UNIQUE INDEX "user_serie_likes_guid_key" ON "user_serie_likes"("guid");

-- AddForeignKey
ALTER TABLE "user_anime_favorites" ADD CONSTRAINT "user_anime_favorites_user_guid_fkey" FOREIGN KEY ("user_guid") REFERENCES "users"("guid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_anime_favorites" ADD CONSTRAINT "user_anime_favorites_anime_guid_fkey" FOREIGN KEY ("anime_guid") REFERENCES "animes"("guid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_movie_favorites" ADD CONSTRAINT "user_movie_favorites_user_guid_fkey" FOREIGN KEY ("user_guid") REFERENCES "users"("guid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_movie_favorites" ADD CONSTRAINT "user_movie_favorites_movie_guid_fkey" FOREIGN KEY ("movie_guid") REFERENCES "movies"("guid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_serie_favorites" ADD CONSTRAINT "user_serie_favorites_user_guid_fkey" FOREIGN KEY ("user_guid") REFERENCES "users"("guid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_serie_favorites" ADD CONSTRAINT "user_serie_favorites_serie_guid_fkey" FOREIGN KEY ("serie_guid") REFERENCES "series"("guid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_anime_likes" ADD CONSTRAINT "user_anime_likes_user_guid_fkey" FOREIGN KEY ("user_guid") REFERENCES "users"("guid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_anime_likes" ADD CONSTRAINT "user_anime_likes_anime_guid_fkey" FOREIGN KEY ("anime_guid") REFERENCES "animes"("guid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_movie_likes" ADD CONSTRAINT "user_movie_likes_user_guid_fkey" FOREIGN KEY ("user_guid") REFERENCES "users"("guid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_movie_likes" ADD CONSTRAINT "user_movie_likes_movie_guid_fkey" FOREIGN KEY ("movie_guid") REFERENCES "movies"("guid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_serie_likes" ADD CONSTRAINT "user_serie_likes_user_guid_fkey" FOREIGN KEY ("user_guid") REFERENCES "users"("guid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_serie_likes" ADD CONSTRAINT "user_serie_likes_serie_guid_fkey" FOREIGN KEY ("serie_guid") REFERENCES "series"("guid") ON DELETE RESTRICT ON UPDATE CASCADE;
