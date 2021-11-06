-- AlterTable
ALTER TABLE `Category` MODIFY `backgroundFallback` VARBINARY(3) NOT NULL DEFAULT 0xffffff;

-- CreateIndex
CREATE INDEX `Post_createdAt_idx` ON `Post`(`createdAt`);

-- CreateIndex
CREATE INDEX `UserPostVote_type_idx` ON `UserPostVote`(`type`);
