/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { PESSOA } from "./pessoa.entity";
import { alteraPessoaDTO } from "./dto/alterapessoa.dto";

@Injectable()
export class PessoasArmazenados{
    #pessoas: PESSOA[] = [];  

    AdicionarPessoa(pessoa: PESSOA){
        this.#pessoas.push(pessoa);
    }


    async removePessoa(id:string){
       
        const pessoa = this.pesquisaId(id);

        this.#pessoas = this.#pessoas.filter(
            pessoaSalvo => pessoaSalvo.ID !== id
        )

        return pessoa
    }

    pesquisaNascimento(nascimento:Date){

      
        const possivelPessoa = this.#pessoas.find(
            pessoa => pessoa.NASCIMENTO == nascimento
        );

      

        return possivelPessoa;
    }    

    pesquisaId (id:string){
        const possivelPessoa = this.#pessoas.find(
           pessoaSalvo => pessoaSalvo.ID === id
        );

        if(!possivelPessoa){
            throw new Error(' não encontrado');
        }

        return possivelPessoa
    }

    alteraPessoa(id:string,dadosNovos: alteraPessoaDTO){
       
        const pessoa = this.pesquisaId(id);

        Object.entries(dadosNovos).forEach(
            ([chave,valor]) => {
               
                if(chave === 'id'){
                    return
                }

                 
                pessoa[chave] = valor;
            }
        )

        return pessoa;
        
    }

    Login(pais:string, nascimento:Date){
        
        const possivelPessoa = this.pesquisaNascimento(nascimento)
       
        if (possivelPessoa){
            return {
               
                usuario: possivelPessoa.NASCIMENTO == nascimento?possivelPessoa:null,
                status: possivelPessoa.NASCIMENTO== nascimento
            };
        }else{
            return {
                pessoa: null,
                status: false
            };
        }
    }


    get Pessoas(){        
        return this.#pessoas;
    }
}