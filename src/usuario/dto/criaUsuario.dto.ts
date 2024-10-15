

import { IsNotEmpty, IsString, IsOptional, IsPhoneNumber, Length } from "class-validator";


export class CriaUsuarioDTO {
    // @IsString()
    // @IsNotEmpty({ message: "Nome não pode ser vazio" })
    
    // readonly NOME: string;

    @IsString()
    @IsOptional() // Tornar opcional se você quiser permitir que o telefone não seja obrigatório
    @IsPhoneNumber('BR', { message: "Telefone deve ser um número válido." }) // Exemplo para o Brasil
    
    readonly TELEFONE?: string;

    @IsString()
    @Length(6, 20, { message: "A senha deve ter entre 6 e 20 caracteres." }) // Adicionando comprimento mínimo
   
    readonly SENHA: string;
}
