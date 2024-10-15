

import { IsNotEmpty, IsOptional, IsString } from "class-validator";


export class AlteraUsuarioDTO {
    
    @IsString()
    @IsNotEmpty({ message: "Nome não pode ser vazio" })
    @IsOptional()

    readonly NOME: string;

    @IsString()
    @IsOptional()
    
    readonly TELEFONE: string; 
    @IsString()
    @IsOptional()
    
    readonly SENHA: string; 
}



