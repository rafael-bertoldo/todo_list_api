import 'dotenv/config'
import {AppDataSource} from "./data-source";
import {app} from "./app";

AppDataSource.initialize()
    .then((): void => {
        console.log('Database connected')

        const PORT: number = Number(process.env.PORT) || 3000
        app.listen(PORT, (): void => console.log(`App is running at port ${PORT}`))
    })