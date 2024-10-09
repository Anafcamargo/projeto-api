import { GENERO } from "src/genero/genero.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

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


    @ManyToOne(() => GENERO, genero => genero.filmes)
    @JoinColumn({name: "IDGENERO", referencedColumnName:"ID"})
        genero:GENERO;
}

