import {
    BeforeInsert, BeforeUpdate,
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity, OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {v4} from 'uuid'
import {getRounds, hashSync} from "bcryptjs";
import {Todo} from "./Todo";

@Entity("users")
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({length: 120})
    name: string

    @Column({ length: 255, unique: true})
    email: string

    @Column({length: 255})
    password: string

    @Column({default: v4()})
    recoveryPass: string

    @Column({default: false})
    activeUser: boolean

    @CreateDateColumn({ type: 'date'})
    createdAt: Date

    @UpdateDateColumn({ type: 'date'})
    updatedAt: Date

    @DeleteDateColumn({ type: 'date', nullable: true})
    deletedAt: Date | null

    @OneToMany(() => Todo, (todo) => todo.user)
    todos: Todo[]

    @BeforeInsert()
    @BeforeUpdate()
    hashPass(): void {
        const hasRounds: number = getRounds(this.password)

        if(!hasRounds) {
            this.password = hashSync(this.password)
        }
    }
}