export class listaPessoaDTO{
    constructor(
        readonly ID:string,
        readonly NOME: string,
        readonly NASCIMENTO: Date,
        readonly PAIS: string
    ){}
}