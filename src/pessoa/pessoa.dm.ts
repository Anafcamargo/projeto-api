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
        //pesquisa usuário pelo id passado para retornar ele 
        const pessoa = this.pesquisaId(id);

        //filtra removendo o usário informado
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
        //primeiro é pesquisado o usuário por meio do email
        const possivelPessoa = this.pesquisaNascimento(nascimento)
        //caso encontre o usuário é validada então a senha, caso contrário ja retorna erro de login
        if (possivelPessoa){
            return {
                //aqui é validada a senha, caso a senha esteja correta, é retornado os dados do usuário e também o status (true para correto, false para incorreto)
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