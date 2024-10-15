import { PESSOA } from 'src/pessoa/pessoa.entity';

import { Inject } from '@nestjs/common';
import { DataSource } from 'typeorm';

export const pessoaProviders = [
  {
    provide: 'PESSOA_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(PESSOA),
    inject: ['DATA_SOURCE'],
  },
];
