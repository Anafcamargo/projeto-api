import { USUARIO } from "src/usuario/usuario.entity";
import { Column, Entity, OneToOne, PrimaryColumn } from "typeorm";

@Entity()
export class FILES{
    @PrimaryColumn()
    ID: string;  

    @Column()
    FILENAME: string;

    @Column()
    CONTENTLENGTH: number;
    

    @Column()
    CONTENTTYPE: string;
    
    @Column()
    URL: string;
    
    @OneToOne(() => USUARIO, usuario => usuario.FILE)
  usuario: USUARIO;
}
