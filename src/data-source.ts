import 'dotenv/config'
import {DataSourceOptions, DataSource} from "typeorm";
import * as path from "path";

const dataSourceConfig = (): DataSourceOptions => {
    const entitiesPath: string = path.join(__dirname, './entities/**.{ts,js}')
    const migrationsPath: string = path.join(__dirname, './migrations/**.{ts,js}')
    const dataBaseUrl: string | undefined = process.env.DATABASE_URL

    if(!dataBaseUrl) throw new Error('Missing env var: "DATABASE_URL"')

    return {
        type: 'postgres',
        url: dataBaseUrl,
        logging: true,
        entities: [entitiesPath],
        migrations: [migrationsPath]
    }
}

export const AppDataSource: DataSource = new DataSource(dataSourceConfig())