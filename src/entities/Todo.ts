import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity, ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {User} from "./User";

@Entity("todos")
export class Todo {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({length: 120})
    title: string

    @Column({type: 'text', nullable: true})
    description: string | null | undefined

    @Column({default: false})
    completed: boolean

    @CreateDateColumn({type: "date"})
    createdAt: Date

    @UpdateDateColumn({type: "date"})
    updatedAt: Date

    @DeleteDateColumn({type: "date", nullable: true})
    deleteAt: Date | null

    @ManyToOne(() => User, (user) => user.todos, {onDelete: 'CASCADE'})
    user: User
}