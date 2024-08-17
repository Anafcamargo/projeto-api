/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */

import {IsNumber, IsString, MinLength } from "class-validator";


export class loginPessoaDTO{
    
    @IsString(undefined)
    nome: string;

    @MinLength(6, {message: "senha deve ter no minimo 6 digitos"})
    nascimento:number;
    
}