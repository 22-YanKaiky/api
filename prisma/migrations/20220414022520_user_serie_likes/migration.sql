-- CreateTable
CREATE TABLE "user_serie_likes" (
    "guid" UUID NOT NULL,
    "user_guid" UUID NOT NULL,
    "serie_guid" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_serie_likes_pkey" PRIMARY KEY ("guid")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_serie_likes_guid_key" ON "user_serie_likes"("guid");

-- AddForeignKey
ALTER TABLE "user_serie_likes" ADD CONSTRAINT "user_serie_likes_user_guid_fkey" FOREIGN KEY ("user_guid") REFERENCES "users"("guid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_serie_likes" ADD CONSTRAINT "user_serie_likes_serie_guid_fkey" FOREIGN KEY ("serie_guid") REFERENCES "series"("guid") ON DELETE RESTRICT ON UPDATE CASCADE;
