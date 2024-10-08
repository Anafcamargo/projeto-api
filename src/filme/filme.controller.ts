
import { DateOptions } from './../../node_modules/@sinclair/typebox/typebox.d';
import { RetornoCadastroDTO, RetornoObjDTO } from 'src/dto/retorno.dto';
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { FilmeService } from './filme.service';
import { FILME } from './filme.entity';

@Controller("/filme")
export class FilmeController{
    constructor(private readonly FilmeService: FilmeService){

    }

    @Get("listar")
    async listar (): Promise<FILME[]>{
        return this.FilmeService.listar();
    }

    @Post("")
    async criaFilme(@Body() dados: CriaFilmeDTO): Promise<RetornoCadastroDTO>{
        return this.FilmeService.inserir(dados)
    }

    @Put (":id")
    async alterarFilme(@Body() dados: AlteraFilmeDTO, @Param("id") id: string): Promise<RetornoCadastroDTO>{
        return this.FilmeService.alterar(id,dados)
    }

    @Get("ID-:id")
    async listarID(@Param("id") id:string): Promise<FILME>{
        return this.FilmeService.localizarID(id);
    }

    @Delete("remove-:id")
    async removeFilme(@Param("id") id: string): Promise<RetornoObjDTO>{
        return this.FilmeService.remover(id);
    }
}