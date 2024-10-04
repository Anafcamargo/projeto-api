/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PessoaModule } from './pessoa/pessoa.module';
import { GeneroModule } from './genero/genero.module';


@Module({
  imports: [PessoaModule,GeneroModule],
  controllers: [],
  providers: [],
})

export class AppModule {}
