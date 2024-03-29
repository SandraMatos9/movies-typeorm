import'reflect-metadata'
import 'express-async-errors'
import express,{ Application } from "express";
import { handleErros } from './error';
import movieRouter from './routers/movies.routers';

const  app:Application = express()
app.use(express.json())
app.use('/movies',movieRouter)
app.use(handleErros)
export default app