import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    userID: number;

    @Column()
    userPhone: string;

    @Column()
    userAdder: string;

}