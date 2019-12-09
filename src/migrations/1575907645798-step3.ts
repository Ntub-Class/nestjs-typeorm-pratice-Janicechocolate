import {MigrationInterface, QueryRunner} from "typeorm";

export class step31575907645798 implements MigrationInterface {
    name = 'step31575907645798'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` CHANGE `id` `id` int NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `user` DROP PRIMARY KEY", undefined);
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `id`", undefined);
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `name`", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD `userID` int NOT NULL PRIMARY KEY AUTO_INCREMENT", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD `userPhone` varchar(255) NOT NULL", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `userPhone`", undefined);
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `userID`", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD `name` varchar(255) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD `id` int NOT NULL AUTO_INCREMENT", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD PRIMARY KEY (`id`)", undefined);
        await queryRunner.query("ALTER TABLE `user` CHANGE `id` `id` int NOT NULL AUTO_INCREMENT", undefined);
    }

}
