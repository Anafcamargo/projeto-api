import { FILME } from "src/filme/filme.entity";
import { GENERO } from "src/genero/genero.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from "typeorm";

@Entity()
export class SERIE{
    @PrimaryColumn()
    ID: string;

    @Column({length: 255}) 
    NOME: string;

    @Column("int")
    EPISODIO: string;

    @Column({length: 255})
    TEMPORADA: string;


    @OneToMany(() => FILME, filme => filme.series)
    filmes: FILME[];
    filme: any;

}

