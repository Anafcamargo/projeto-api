import { IsNotEmpty, IsString } from "class-validator";


export class CriaSerieDTO {
    @IsString()
    @IsNotEmpty ({message: "Nome não pode ser vazio"})
    NOME: string;

    @IsString()
    @IsNotEmpty({message: " Episódio não pode ser vazio"})
    EPISODIO: string;

    @IsString()
    @IsNotEmpty({message: " Temporada não pode ser vazio"})
    TEMPORADA: string;
}