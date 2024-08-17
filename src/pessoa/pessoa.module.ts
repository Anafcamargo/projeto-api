/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PessoaController } from './pessoa.controller';
import { PessoasArmazenados } from './pessoa.dm';




@Module({
  
  controllers: [PessoaController],
  providers:[PessoasArmazenados],
  
})

export class PessoaModule {}