/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";


export class alteraPessoaDTO{

    @IsString()
    @IsNotEmpty({message: "nome não pode ser vazio"})
    @IsOptional()
    nome: string;
    
    @IsNumber()
    @IsOptional()
    nascimento: number;

    @IsString()
    @IsOptional()
    pais: string;
   
}