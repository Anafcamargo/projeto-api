import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { filmeProviders } from "./filme.providers";
import { generoProviders } from "src/genero/genero.providers";
import { GeneroModule } from "src/genero/genero.module";
import { GeneroService } from "src/genero/genero.service";
import { FilmeService } from "./filme.service";

@Module({
    imports: [DatabaseModule],
    controllers: [FilmeController],
    providers: [...filmeProviders,
        FilmeService,
        ...generoProviders,
        GeneroService,
        
    ],
})

export class FilmeModule {}