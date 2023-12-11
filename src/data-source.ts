import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "root",
    password: "root",
    database: "test_db",
    synchronize: false,
    logging: true,
    entities: [User],
    migrations: [],
    subscribers: [],
})
