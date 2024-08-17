/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier

import { IsNotEmpty, IsNumber, IsString } from "class-validator";

 
export class criaPessoaDTO{
    @IsString()
    @IsNotEmpty({message:"Nome não pode ser vazio"})
    nome: string;

    @IsNumber()
    nascimento: number;

    @IsString()
    pais: string;

   
    
}