import express, {Application, json} from 'express'
import {GlobalMiddlewares} from "./Middlewares/Globals.middleware";

export const app: Application = express()

app.use(json())

app.use(GlobalMiddlewares.handleErrors)
