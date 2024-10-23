import { Module } from '@nestjs/common';
import { PessoaModule } from './pessoa/pessoa.module';
import { GeneroModule } from './genero/genero.module';
import { DatabaseModule } from './database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { UsuarioModule } from './usuario/usuario.module';
import { FilmeModule } from './filme/filme.module';
import { FilesModule } from './files/files.module';

@Module({
  imports: [
    DatabaseModule,
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "",
      database: "PROJETOAPI",
      entities: [join(__dirname, "**", "*.entity.{ts,js}")],
      synchronize: false, // Use true se quiser que o TypeORM sincronize as entidades
    }),
    PessoaModule,
    GeneroModule,
    UsuarioModule,
    FilmeModule,
    FilesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
