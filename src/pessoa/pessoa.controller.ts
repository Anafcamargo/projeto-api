/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable no-var */
/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { criaPessoaDTO } from "./dto/pessoa.dto";
import {PessoaEntity } from "./pessoa.entity";
import {v4  as uuid} from 'uuid'
import { PessoasArmazenados } from "./pessoa.dm";
import { RetornoPessoaDTO } from "./dto/retornoPessoa.dto";
import { alteraPessoaDTO } from "./dto/alterapessoa.dto";
import { ListaPessoaDTO } from "./dto/listapessoa.dto";
import { loginPessoaDTO } from "./dto/loginpessoa.dto";
import { response } from "express";
import { url } from "inspector";

@Controller('/pessoas')
export class PessoaController{
    
    constructor(private Pessoas : PessoasArmazenados){

    }

    @Post()
    async criaPessoa(@Body() dadosPessoa: criaPessoaDTO){        
        // var emailValido =this.Pessoas.validaEmail( dadosPessoa.email);
        var novoPessoa = new PessoaEntity(uuid(), dadosPessoa.nome, dadosPessoa.nascimento, 
                                            dadosPessoa.pais
        )
        
            this.Pessoas.AdicionarPessoa(novoPessoa);
            var retorno = new RetornoPessoaDTO("criado",novoPessoa);
        
                    
        
        return retorno
    }

 
    @Post('/login')//linha que define o método post para login, nesse caso é idenficado o URL
    async fazerLogin(@Body() dadosLogin: loginPessoaDTO){
        //chamada da função de login
        var retornoLogin = this.Pessoas.Login(dadosLogin.nome,dadosLogin.nascimento)
        //criação de retorno, onde caso a resposta seja true é retornado login efetuado, caso seja false, retorna email ou senha invalidos, também é retornado o usuário logado
        var retorno = new RetornoPessoaDTO(retornoLogin.status?'Login efetuado':'Dados invalidos',retornoLogin.pessoa);        
        return retorno;       
        
    }

    @Put('/:id')
    async alteraPessoa(@Body() dadosNovos: alteraPessoaDTO,@Param('id') id: string){
       
        var retornoAlteracao = this.Pessoas.alteraPessoa(id,dadosNovos)
        
        var retorno = new RetornoPessoaDTO('Alteração Efetuada',retornoAlteracao);        
        return retorno;       
        
    }

    @Delete('/:id')
    async removePessoa(@Param('id') id: string){
        
        var retornoExclusao = await this.Pessoas.removePessoa(id)
     
        var retorno = new RetornoPessoaDTO('Exclusão Efetuada',retornoExclusao);        
        return retorno;       
        
    }

    @Get('/:nascimento')
    async retornaPessoas(@Param('nascimento') nascimento:number){
      
        var pessoasListados = this.Pessoas.pesquisaNascimento(nascimento)
        
        
        const ListaRetorno = new ListaPessoaDTO(pessoasListados.id,
                                                pessoasListados.nome,
                                                pessoasListados.nascimento,
                                            pessoasListados.pais)

        return {

                Pessoas: ListaRetorno
            };
    }



    @Get()
    async retornaPessoa(){
        
        var pessoasListados = this.Pessoas.Pessoas;
        const ListaRetorno = pessoasListados.map(
            pessoa => new ListaPessoaDTO(
                pessoa.id,
                pessoa.nome,
                pessoa.nascimento,
                pessoa.pais
            )
        );



        return {
                Pessoas: ListaRetorno
            };
    }
}