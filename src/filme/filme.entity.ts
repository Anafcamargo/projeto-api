import { GENERO } from "src/genero/genero.entity";
import { SERIE } from "src/serie/serie.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn } from "typeorm";

@Entity()
export class FILME{
    @PrimaryColumn()
    ID: string;

    @Column({length: 255}) 
    NOME: string;

    @Column("int")
    DURACAO: number;

    @Column({length: 255})
    SINOPSE: string;

    @Column({length: 255})
    ANO: string;

    @ManyToOne(() => GENERO, genero => genero.filmes)
    @JoinColumn({name: "NOME", referencedColumnName:"NOME"})
        genero:GENERO;
    atores: any;

    @OneToOne(() => SERIE, series => series.filme)
    @JoinColumn({name: "NOME", referencedColumnName:"NOME"})
        series:SERIE;
    filme: any;
    
}

