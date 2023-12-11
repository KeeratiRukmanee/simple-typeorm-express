import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn("uuid")
    uid: string

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

}
