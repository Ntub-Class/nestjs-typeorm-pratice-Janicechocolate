import {MigrationInterface, QueryRunner} from "typeorm";

export class step21575907525797 implements MigrationInterface {
    name = 'step21575907525797'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` ADD `userAdder` varchar(255) NOT NULL", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `userAdder`", undefined);
    }

}
