export class listaFilmeDTO{
    constructor(
        readonly ID: string,
        readonly NOME: string,
        readonly DURACAO: Date,
        readonly SINOPSE: string,
        readonly ANO: string
       

    ){}
}

export class ListagemFilmesDTO{
    constructor(
        readonly filme: listaFilmeDTO[],
    ){}
}