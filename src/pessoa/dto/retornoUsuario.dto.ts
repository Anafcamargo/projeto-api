import { UsuarioEntity } from "../pessoa.entity";

export class RetornoUsuarioDTO{
    constructor(
        readonly status: string,
        readonly usuario: UsuarioEntity
        ){}
}