import { Injectable } from "@nestjs/common";
import { PessoaEntity } from "./pessoa.entity";

@Injectable()
export class PessoasArmazenados{
    #usuarios: PessoaEntity[] = [];  

    AdicionarUsuario(usuario: PessoaEntity){
        this.#usuarios.push(usuario);
    }

    validaEmail(emailNovo: string){
        const possivelUsuario = this.#usuarios.find(
            usuario => usuario.email == emailNovo
        )
        
        return (possivelUsuario === undefined)
    }

 

    get Usuarios(){        
        return this.#usuarios;
    }
}