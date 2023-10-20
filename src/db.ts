import "reflect-metadata"
import { DataSource } from "typeorm"
import { Film1697790035411 } from "./migration/1697790035411-film"

export const AppDataSource = new DataSource({
 type: "mysql",
 host: "localhost",
 port: 3306,
 username: "root",
 password: "1234",
 database: "typeorm",
 entities: [],
 migrations:[Film1697790035411],
 synchronize: false,
 logging: false,
})