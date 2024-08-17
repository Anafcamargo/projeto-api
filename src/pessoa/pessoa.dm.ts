/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { PessoaEntity } from "./pessoa.entity";
import { alteraPessoaDTO } from "./dto/alterapessoa.dto";

@Injectable()
export class PessoasArmazenados{
    #pessoas: PessoaEntity[] = [];  

    AdicionarPessoa(pessoa: PessoaEntity){
        this.#pessoas.push(pessoa);
    }


    async removePessoa(id:string){
       
        const pessoa = this.pesquisaId(id);

        this.#pessoas = this.#pessoas.filter(
            pessoaSalvo => pessoaSalvo.id !== id
        )

        return pessoa
    }

    pesquisaNascimento(nascimento:number){

      
        const possivelPessoa = this.#pessoas.find(
            pessoa => pessoa.nascimento == nascimento
        );

      

        return possivelPessoa;
    }    

    pesquisaId (id:string){
        const possivelPessoa = this.#pessoas.find(
           pessoaSalvo => pessoaSalvo.id === id
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

    Login(pais:string, nascimento:number){
        
        const possivelPessoa = this.pesquisaNascimento(nascimento)
       
        if (possivelPessoa){
            return {
               
                usuario: possivelPessoa.nascimento == nascimento?possivelPessoa:null,
                status: possivelPessoa.nascimento== nascimento
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