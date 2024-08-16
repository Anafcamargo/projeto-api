import { Module } from '@nestjs/common';
import { PessoaController } from './pessoa.controller';
import { PessoasArmazenados } from './pessoa.dm';
import { emailUnicoValidator } from './validacao/email-unico.validator';



@Module({
  
  controllers: [PessoaController],
  providers:[PessoasArmazenados,emailUnicoValidator],
  
})
export class PessoaModule {}