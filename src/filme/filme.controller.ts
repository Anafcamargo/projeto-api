
import { DateOptions } from './../../node_modules/@sinclair/typebox/typebox.d';
import { RetornoCadastroDTO, RetornoObjDTO } from 'src/dto/retorno.dto';
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { FilmeService } from './filme.service';
import { FILME } from './filme.entity';
import { CriaFilmeDTO } from './dto/criaFilme.dto';
import { AlteraFilmeDTO } from './dto/alteraFilme.dto';
import {listaFilmeDTO } from './dto/listaFilme.dto';

@Controller("/filme")
export class FilmeController{
    constructor(private readonly FilmeService: FilmeService){

    }

    @Get()
    async Retorno (): Promise<listaFilmeDTO[]>{
        return this.FilmeService.listar();
    }

    @Get("/compartilhar/:id")
    async Compartilhar(@Param("id") id: string): Promise<{message:string}>{
        return this.FilmeService.Compartilhar(id);
    }

    @Delete("remove-:id")
    async remove(@Param("id") id: string): Promise<RetornoObjDTO>{
        return this.FilmeService.remover(id);
    }

    @Post("")
    async criaFilme(@Body() dados: CriaFilmeDTO): Promise<RetornoCadastroDTO>{
        return this.FilmeService.inserir(dados);
    }

    @Put (":id")
    async alterarFilme(@Param("id") id:string, @Body() novosdados: AlteraFilmeDTO): Promise<RetornoCadastroDTO>{
        return this.FilmeService.alterar(id,novosdados);
    }

    // @Get("ID-:id")
    // async listarID(@Param("id") id:string): Promise<FILME>{
    //     return this.FilmeService.localizarID(id);
    // }

    
}