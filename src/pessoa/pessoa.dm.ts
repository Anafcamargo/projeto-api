import { Injectable } from "@nestjs/common";
import { PessoaEntity } from "./pessoa.entity";

@Injectable()
export class PessoasArmazenados{
    #pessoas: PessoaEntity[] = [];  

    AdicionarPessoa(pessoa: PessoaEntity){
        this.#pessoas.push(pessoa);
    }

    validaEmail(emailNovo: string){
        const possivelPessoa = this.#pessoas.find(
            pessoa => pessoa.email == emailNovo
        )
        
        return (possivelPessoa === undefined)
    }

 

    get Pessoas(){        
        return this.#pessoas;
    }
}