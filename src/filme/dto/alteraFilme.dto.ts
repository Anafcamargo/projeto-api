import { Optional } from "@nestjs/common";
import { IsNotEmpty, IsString } from "class-validator";


export class AlteraFilmeDTO {
    @IsString()
    @Optional()
    @IsNotEmpty ({message: "Nome não pode ser vazio"})
    NOME: string;

    @IsString()
    @Optional()
    @IsNotEmpty({message: " Duração não pode ser vazio"})
    DURACAO: Number;

    @IsString()
    @Optional()
    @IsNotEmpty ({message: "Sinopse não pode ser vazio"})
    SINOPSE: string;

    @IsString()
    @Optional()
    @IsNotEmpty ({message: "Ano não pode ser vazio"})
    ANO: string;
}