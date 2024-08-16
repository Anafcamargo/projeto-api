import { Body, Controller, Get, Post } from "@nestjs/common";
import { criaPessoaDTO } from "./dto/pessoa.dto";
import {PessoaEntity } from "./pessoa.entity";
import {v4  as uuid} from 'uuid'
import { PessoasArmazenados } from "./pessoa.dm";
import { RetornoPessoaDTO } from "./dto/retornoPessoa.dto";

@Controller('/pessoas')
export class PessoaController{
    
    constructor(private Pessoas : PessoasArmazenados){

    }

    @Post()
    async criaPessoa(@Body() dadosPessoa: criaPessoaDTO){        
        var emailValido =this.Pessoas.validaEmail( dadosPessoa.email);
        var novoPessoa = new PessoaEntity(uuid(), dadosPessoa.nome, dadosPessoa.idade, 
                                            dadosPessoa.cidade, dadosPessoa.email,
                                            dadosPessoa.telefone, dadosPessoa.senha
        )
        
        if (emailValido){
            this.Pessoas.AdicionarPessoa(novoPessoa);
            var retorno = new RetornoPessoaDTO('Usuario criado',novoPessoa);
            
           
        }else{  
            var retorno = new RetornoPessoaDTO('Usuario não criado - email duplicado',null);            
        }

        return retorno
        
        
    }

    @Get()
    async retornaPessoa(){
        return {
                Pessoas: this.Pessoas.Pessoas
            };
    }
}