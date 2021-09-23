import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Student {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    ra: string;

    @Column({
        type: 'date',
        nullable: true  
    })
    dataNasc: Date

    @Column()
    idade: number;

    @Column()
    endereco: string;

    @Column({
        default: false
    })
    matricula: boolean;

}
