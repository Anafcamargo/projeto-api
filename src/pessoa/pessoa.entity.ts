/* eslint-disable prettier/prettier */
export class PessoaEntity{
    id: string;
    nome: string;
    nascimento: number;
    pais: string;
    value:number;
   
    constructor (id: string, nome: string, nascimento: number, pais: string, ){

        this.id = id;
        this.nome = nome;
        this.nascimento = nascimento;
        this.pais = pais;
    }
}