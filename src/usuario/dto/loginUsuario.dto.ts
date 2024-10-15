

import { IsNotEmpty, IsString, MinLength } from "class-validator";


export class LoginUsuarioDTO {
    
    @IsString()
    @IsNotEmpty({ message: "Nome não pode ser vazio" })
   
    NOME: string;

    @IsString()
    @MinLength(6, { message: "A senha deve ter pelo menos 6 caracteres" })
  
    SENHA: string;
}
