/* eslint-disable prettier/prettier */
import { PessoaEntity} from "../pessoa.entity";

export class RetornoPessoaDTO{
    constructor(
        readonly status: string,
        readonly pessoa: PessoaEntity
        ){}
}