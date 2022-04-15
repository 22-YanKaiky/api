-- CreateTable
CREATE TABLE "user_anime_likes" (
    "guid" UUID NOT NULL,
    "user_guid" UUID NOT NULL,
    "anime_guid" UUID NOT NULL,
    "like" BOOLEAN DEFAULT false,
    "dislike" BOOLEAN DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_anime_likes_pkey" PRIMARY KEY ("guid")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_anime_likes_guid_key" ON "user_anime_likes"("guid");

-- AddForeignKey
ALTER TABLE "user_anime_likes" ADD CONSTRAINT "user_anime_likes_user_guid_fkey" FOREIGN KEY ("user_guid") REFERENCES "users"("guid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_anime_likes" ADD CONSTRAINT "user_anime_likes_anime_guid_fkey" FOREIGN KEY ("anime_guid") REFERENCES "animes"("guid") ON DELETE RESTRICT ON UPDATE CASCADE;
