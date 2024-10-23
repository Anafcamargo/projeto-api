import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders], // Exportando os provedores corretamente
})
export class DatabaseModule {}
