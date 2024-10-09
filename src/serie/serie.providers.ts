import { Inject } from "@nestjs/common";
import { DataSource } from "typeorm";
import { SERIE } from "./serie.entity";



export const serieProviders = [
    {
        provide: "SERIE_REPOSITORY",
        useFactory: (DataSource: DataSource) => DataSource.getRepository(SERIE),
        Inject: ["DATA_SOURCE"],
    },
];