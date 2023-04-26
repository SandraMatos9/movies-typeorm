import { Router } from "express";
import { createMoviesController, listMoviesController } from "../controllers/movies.controllers";
import nameExistsMiddleware from "../middlewares/nameExists.middleware";
import { moviesSchemas } from "../schemas/movies.schemas";

const  movieRouter = Router()

movieRouter.post(
    "",nameExistsMiddleware(moviesSchemas),
    createMoviesController)

movieRouter.get("",listMoviesController)
movieRouter.patch("/:id")
movieRouter.delete("/:id")



export default movieRouter
