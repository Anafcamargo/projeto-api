import { Optional } from "@nestjs/common";
import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";


export class AlteraFilmeDTO {
    @IsString()
    @Optional()
    @IsNotEmpty ({message: "Nome não pode ser vazio"})
    NOME: string;

    @IsDate()
    @Optional()
    @IsNotEmpty({message: " Duração não pode ser vazio"})
    DURACAO: Date;

    @IsString()
    @Optional()
    @IsNotEmpty ({message: "Sinopse não pode ser vazio"})
    SINOPSE: string;

    @IsString()
    @Optional()
    @IsNotEmpty ({message: "Ano não pode ser vazio"})
    ANO: string;
}