import { IsEmail, IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";
import { EmailUnico } from "../validacao/email-unico.validator";
 
 
export class criaPessoaDTO{
    @IsString()
    @IsNotEmpty({message:"Nome não pode ser vazio"})
    nome: string;

    @EmailUnico({message:"Email repetido"})
    @IsEmail(undefined,{message:"Email inválido"})
    email: string;

    @MinLength(6,{message:"Senha deve ter no mínimo 6 digitos"})
    senha: string;

    @IsNumber()
    idade: number;

    @IsString()
    cidade: string;

   @IsString()
    telefone: string;
    
}