import { DataSource } from "typeorm";
import { FILME } from "./filme.entity";


export const filmeProviders = [{
    provide: "FILME_REPOSITORY",
    useFactory: (DataSource: DataSource) => DataSource.getRepository(FILME),
    inject:["DATA_SOURCE"],
},
];