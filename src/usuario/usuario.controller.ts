import { UsuarioService } from './usuario.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CriaUsuarioDTO } from "./dto/criaUsuario.dto";
import { USUARIO } from "./usuario.entity";
import { v4 as uuid } from 'uuid';
import { RetornoUsuarioDTO } from "./dto/retornoUsuario.dto";
import { ListaUsuarioDTO } from "./dto/listaUsuario.dto";
import { LoginUsuarioDTO } from "./dto/loginUsuario.dto";
import { AlteraUsuarioDTO } from "./dto/alteraUsuario.dto";

import { RetornoCadastroDTO, RetornoObjDTO } from 'src/dto/retorno.dto';


@Controller('/usuarios')
export class UsuarioController {
    constructor(private readonly usuarioService: UsuarioService) {}

    @Get("listar")

    async listar(): Promise<USUARIO[]> {
        return this.usuarioService.listar();
    }

    @Post("")
   
    async criaUsuario(@Body() dados: CriaUsuarioDTO): Promise<RetornoCadastroDTO> {
        return this.usuarioService.inserir(dados);
    }

    @Put(":id")
    
    async alterarUsuario(@Body() dados: AlteraUsuarioDTO, @Param("id") id: string): Promise<RetornoCadastroDTO> {
        return this.usuarioService.alterar(id, dados);
    }

    @Get("ID-:id")
 
    async listarID(@Param("id") id: string): Promise<USUARIO> {
        return this.usuarioService.localizarID(id);
    }

    @Delete("remove-:id")
 
    async removeUsuario(@Param("id") id: string): Promise<RetornoObjDTO> {
        return this.usuarioService.remover(id);
    }

    // Add other methods as needed
}
