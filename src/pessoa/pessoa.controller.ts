import { Body, Controller, Get, Post } from "@nestjs/common";
import { criaUsuarioDTO } from "./dto/pessoa.dto";
import {PessoaEntity } from "./pessoa.entity";
import {v4  as uuid} from 'uuid'
import { PessoasArmazenados } from "./pessoa.dm";
import { RetornoPessoaDTO } from "./dto/retornoUsuario.dto";

@Controller('/usuarios')
export class PessoaController{
    
    constructor(private Usuarios : PessoasArmazenados){

    }

    @Post()
    async criaUsuario(@Body() dadosUsuario: criaPessoaDTO){        
        var emailValido =this.Usuarios.validaEmail( dadosUsuario.email);
        var novoUsuario = new PessoaEntity(uuid(), dadosUsuario.nome, dadosUsuario.idade, 
                                            dadosUsuario.cidade, dadosUsuario.email,
                                            dadosUsuario.telefone, dadosUsuario.senha
        )
        
        if (emailValido){
            this.Usuarios.AdicionarUsuario(novoUsuario);
            var retorno = new RetornoPessoaDTO('Usuario criado',novoUsuario);
            
           
        }else{  
            var retorno = new RetornoPessoaDTO('Usuario não criado - email duplicado',null);            
        }

        return retorno
        
        
    }

    @Get()
    async retornaUsuario(){
        return {
                Usuarios: this.Usuarios.Usuarios
            };
    }
}