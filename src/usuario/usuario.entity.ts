


import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class USUARIO {
    @PrimaryGeneratedColumn('uuid') // Automatically generates a UUID
    
    ID: string;

    // @Column({ length: 255 })
    
    // NOME: string; 

    @Column({ length: 20 })
    
    TELEFONE: string;

    @Column({ length: 55 })
 
    SENHA: string;

    
}
